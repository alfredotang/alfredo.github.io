import React, { memo, useState, ReactNode, FC } from 'react';
import { navigate } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMeasure, usePrevious } from '@src/hook';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
        overflow: hidden;
        ${(props) => {
            const color = props.color || props.theme.palette.text.primary;
            return css`
                border-left: 1px solid ${color};
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
        transition: 0.5s;
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
            {/* <ArrowForwardIosIcon className="icon" /> */}
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
            if (href[0] !== '#') {
                const link: string = href[href.length - 1] === '/' ? href : `${href}/`;
                targetBlank ? window.open(link, '__blank') : navigate(link);
            }
        }
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <Container color={color} isLast={!children}>
            <IconBlock isOpen={isOpen} onClick={() => setOpen(!isOpen)} children={children} />
            <Button className="tree-item" onClick={() => handleClickItem()} href={href}>
                {name}
            </Button>

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
