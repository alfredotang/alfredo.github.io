import React from 'react';
import { Components } from '@mdx-js/react';
import { styled } from '@theme';
import Color from 'color';
import MuiLink from '@material-ui/core/Link';
import { default as MdxImg } from './MdxImg';

const MdxH1 = styled.h1`
    ${(props) => props.theme.typography.h4 as any};
    .anchor {
        display: none;
    }
`;

const MdxH2 = styled.h2`
    ${(props) => props.theme.typography.h5 as any};
    .anchor {
        display: none;
    }
`;

const MdxH3 = styled.h3`
    ${(props) => props.theme.typography.h6 as any};
    .anchor {
        display: none;
    }
`;

const MdxP = styled.p`
    ${(props) => props.theme.typography.body2 as any};
    line-height: 1.75rem;
    /* Trigger img 樣式 */
    .gatsby-resp-image-background-image {
        border-radius: 10px;
    }
    /* hide link icon */
    .anchor {
        display: none;
    }
    /* inline code highlight */
    code {
        color: ${(props) => props.theme.palette.secondary.main};
        background-color: ${(props) => Color(props.theme.palette.secondary.light).alpha(0.3).toString()};
        /* border: 1px solid ${(props) => props.theme.palette.secondary.main}; */
        border-radius: ${(props) => props.theme.shape.borderRadius}px;
        padding: ${(props) => props.theme.spacing(0.5)}px;
    }
`;

const MdxA = styled(MuiLink)`
    color: ${(props) => props.theme.palette.info.main} !important;
    &:hover {
        color: ${(props) => props.theme.palette.info.light} !important;
    }
`;

const MdxPre = styled.pre`
    box-shadow: ${(props) => props.theme.shadows[10]};
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    code {
        color: inherit;
        border: none;
        border-radius: unset;
        padding: unset;
    }
`;

const MdxBlockquote = styled.blockquote`
    background-color: ${(props) => Color(props.theme.palette.primary.main).alpha(0.2).string()};
    border-left-color: ${(props) => props.theme.palette.primary.main};
    border-left-width: 9px;
    border-left-style: solid;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 20px;
    margin-left: 0px;
    margin-right: -8px;
`;

const MDXComponents: Components = {
    img: (props) => <MdxImg {...props} />,
    h1: (props) => <MdxH1 {...props} />,
    h2: (props) => <MdxH2 {...props} />,
    h3: (props) => <MdxH3 {...props} />,
    p: (props) => <MdxP {...props} />,
    a: (props) => <MdxA {...props} />,
    blockquote: (props) => <MdxBlockquote {...props} />,
    pre: (props) => <MdxPre {...props} />,
};

export default MDXComponents;
