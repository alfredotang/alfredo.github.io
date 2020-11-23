import React, { memo, useState, ReactNode, FC, Fragment } from 'react';
import { Link, navigate } from 'gatsby';
import Color from 'color';
import { animated, useSpring } from 'react-spring';
import { styled, css } from '@theme';
import { useMeasure, usePrevious } from '@src/hook';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

const Container = styled.section<{ color: string; isLast: boolean }>`
    position: relative;
    padding-left: ${(props) => props.theme.spacing(1)}px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    vertical-align: middle;
    color: ${(props) => props.color || props.theme.palette.common.black};

    .tree-item {
        display: inline;
        text-transform: capitalize;
        text-align: left;
        color: ${(props) => props.theme.palette.text.primary};
    }

    .content {
        will-change: transform, opacity, height;
        margin-left: 24px;
        /* padding: 0px 0px 0px 14px; */
        overflow: hidden;
        ${(props) => {
            const color = props.color || props.theme.palette.text.primary;
            return css`
                border-left: 1px dashed ${color};
            `;
        }};
    }
`;

const TreeIconButton = styled(IconButton)<{ children: ReactNode }>`
    .icon {
        width: 1em;
        height: 1em;
        cursor: pointer;
        vertical-align: middle;
        opacity: ${(props) => (props.children ? 1 : 0.3)};
        margin-right: ${(props) => (props.children ? 0 : props.theme.spacing(1))}px;
    }
`;

type IIconBlockProps = {
    isOpen: boolean;
    onClick: () => void;
    children: ReactNode;
};

type IProps = {
    children?: ReactNode;
    name?: string;
    defaultOpen?: boolean;
    color?: string;
    href?: string;
    onClick?: () => void;
    targetBlank?: boolean;
};

const IconBlock: FC<IIconBlockProps> = ({ isOpen, onClick, children }) => {
    const Component = !isOpen && children ? AddBoxOutlinedIcon : IndeterminateCheckBoxOutlinedIcon;

    return (
        <TreeIconButton onClick={() => onClick()} disabled={!children}>
            <Component className="icon" />
        </TreeIconButton>
    );
};

const Tree = memo<IProps>((props) => {
    const { children, href, name, defaultOpen = false, color, onClick, targetBlank } = props;
    const [isOpen, setOpen] = useState<boolean>(defaultOpen);
    const previous = usePrevious(isOpen);
    const [bind, { height: viewHeight }] = useMeasure();
    const { height, opacity, transform } = useSpring<any>({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
        },
    });

    const handleClickItem = () => {
        if (children && !href) {
            setOpen(!isOpen);
        } else {
            if (targetBlank) {
                window.open(href, '__blank');
            } else {
                if (href[0] !== '#') {
                    const link: string = href[href.length - 1] === '/' ? href : `${href}/`;
                    navigate(`${link}`);
                }
            }
        }
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <Container color={color} isLast={!children}>
            <IconBlock isOpen={isOpen} onClick={() => setOpen(!isOpen)} children={children} />
            {href && href[0] === '#' ? (
                <Button className="tree-item" onClick={() => handleClickItem()} href={href}>
                    {name}
                </Button>
            ) : (
                <Button className="tree-item" onClick={() => handleClickItem()}>
                    {name}
                </Button>
            )}

            <animated.div
                style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}
                className="content"
            >
                <animated.div style={{ transform }} {...bind} children={children} />
            </animated.div>
        </Container>
    );
});

export default Tree;
