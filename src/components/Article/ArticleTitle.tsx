import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Variant } from '@material-ui/core/styles/createTypography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { css, Theme } from '@theme';

type IProps = {
    data: Typing.Mdx;
    variant?: Variant;
    color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
};

const ArticleTitle: React.FC<IProps> = ({ data, variant = 'h6', color = 'inherit' }) => {
    return (
        <Fragment>
            <Typography variant={variant} color={color}>
                {data.frontmatter.title}
            </Typography>
            <Typography
                variant="overline"
                css={(theme: Theme) =>
                    css`
                        color: ${theme.palette.text.secondary};
                    `
                }
            >
                <AccessTimeIcon
                    css={(theme: Theme) =>
                        css`
                            font-size: inherit;
                            vertical-align: text-bottom;
                            margin-right: ${theme.spacing(0.5)}px;
                        `
                    }
                />
                <span>{data.frontmatter.date}</span>
            </Typography>
        </Fragment>
    );
};

export default ArticleTitle;
