import { styled, css } from '@theme';

interface LimitLineProps {
    fontSize: string;
    limitLines: number;
    lineHeight?: string;
    wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
}

const LimitLine = styled.span`
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${(props: LimitLineProps) => {
        const { fontSize, limitLines, lineHeight, wordBreak = 'break-word' } = props;

        const fontSizeNumber = Number(/\d+/.exec(fontSize));
        const lineHeightNumber = lineHeight ? Number(/\d+/.exec(lineHeight)) : 0;
        const height = lineHeightNumber * limitLines;

        return css`
            font-size: ${fontSize};
            line-height: ${lineHeight || `${fontSizeNumber + 1}px`};
            -webkit-line-clamp: ${limitLines};
            word-break: ${wordBreak};
            height: ${height};
        `;
    }};
`;

export default LimitLine;
