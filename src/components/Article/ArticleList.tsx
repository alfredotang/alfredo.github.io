import React from 'react';
import { navigate, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { styled } from '@theme';
import { LimitLine } from '@components';
import { targetPath } from '@util';

const ArticleListRoot = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: ${(props) => props.theme.spacing(3)}px;
    transition: 1s;
    border-bottom: 1px solid ${(props) => props.theme.palette.divider};

    .title {
        margin-bottom: ${(props) => props.theme.spacing(1)}px;
    }

    .content {
        margin-bottom: ${(props) => props.theme.spacing(2)}px;
    }

    .action-block {
        display: flex;
        &__tag-block {
            flex-basis: 90%;
        }

        &__tag {
            text-transform: none;
            margin-right: ${(props) => props.theme.spacing(2)}px;
        }

        &__more {
            flex-basis: 10%;
        }
    }
`;

type IProps = {
    data: Typing.Mdx;
};

const ArticleList: React.FC<IProps> = ({ data }) => {
    const handleRedirectToBlog = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.stopPropagation();
        navigate(data.fields.slug);
    };

    const handleRedirectToTag = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, tag: string) => {
        event.stopPropagation();
        navigate(targetPath('tag', [tag]));
    };
    return (
        <ArticleListRoot onClick={(event) => handleRedirectToBlog(event)}>
            <Typography className="title" variant="h5" color="primary">
                {data.frontmatter.title}
            </Typography>
            <Typography className="content" variant="subtitle1" component="p">
                <LimitLine limitLines={5} fontSize="inherit" lineHeight="1.5">
                    {data.excerpt}
                </LimitLine>
            </Typography>
            <div className="action-block">
                <div className="action-block__tag-block">
                    {data.frontmatter.tag.map((item) => (
                        <Button
                            key={item}
                            className="action-block__tag"
                            variant="outlined"
                            color="secondary"
                            onClick={(event) => handleRedirectToTag(event, item)}
                        >
                            {item}
                        </Button>
                    ))}
                </div>
                <div className="action-block__more">
                    <Button variant="outlined" color="primary" onClick={(event) => handleRedirectToBlog(event)}>
                        more
                    </Button>
                </div>
            </div>
        </ArticleListRoot>
    );
};

export default ArticleList;
