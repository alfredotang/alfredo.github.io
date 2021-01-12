import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { Tree } from '@components';

const LinkButton = styled(Link)`
    display: block;
    .button {
        display: inline;
        text-transform: capitalize;
        text-align: left;
        color: ${(props) => props.theme.palette.text.primary};
    }
`;

type IProps = {
    data?: Typing.TableOfContents;
    onClickTableContent?: () => void;
    onClose?: () => void;
    className?: string;
};
const TOC: React.FC<IProps> = ({ data, onClickTableContent, onClose, className }) => {
    return (
        <div className={className}>
            <Tree defaultOpen name="TABLE OF CONTENT">
                {data.items.map((tocItem) => {
                    if (tocItem?.items && tocItem.items.length > 0) {
                        return (
                            <Tree
                                name={tocItem.title}
                                href={tocItem.url}
                                key={tocItem.title}
                                onClick={onClickTableContent}
                            >
                                {tocItem.items.map((tocItemChild) => {
                                    return (
                                        <Tree
                                            name={tocItemChild.title}
                                            href={tocItemChild.url}
                                            key={tocItemChild.title}
                                            onClick={onClickTableContent}
                                        />
                                    );
                                })}
                            </Tree>
                        );
                    }
                    return (
                        <Tree
                            defaultOpen
                            name={tocItem.title}
                            href={tocItem.url}
                            key={tocItem.title}
                            onClick={onClickTableContent}
                        />
                    );
                })}
            </Tree>
        </div>
    );
};

export default TOC;
