import React from 'react';
import { graphql } from 'gatsby';
import Driver from '@material-ui/core/Divider';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';
import { Layout, MDXComponents, ArticleTitle, TOC } from '@components';

const StyledWrapper = styled.div`
    display: flex;
    .article-block {
        ${(props) => props.theme.breakpoints.up('sm')} {
            flex-basis: 60%;
        }
    }
    .toc-block {
        display: none;
        ${(props) => props.theme.breakpoints.up('sm')} {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            flex-basis: 40%;
        }
    }

    .toc-content {
        position: fixed;
    }
`;

type IProps = {
    data: Typing.Query;
};
const BlogTemplate: React.FC<IProps> = ({ data }) => {
    const { mdx } = data;
    return (
        <Layout title={mdx?.frontmatter?.title}>
            <StyledWrapper>
                <article className="article-block ">
                    <ArticleTitle data={mdx} variant="h4" />
                    <Driver />
                    <MDXProvider components={MDXComponents}>
                        <MDXRenderer>{mdx?.body}</MDXRenderer>
                    </MDXProvider>
                </article>
                <aside className="toc-block">
                    <TOC data={mdx.tableOfContents} className="toc-content" />
                </aside>
            </StyledWrapper>
        </Layout>
    );
};
export default BlogTemplate;
export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                tag
                category
                date(formatString: "YYYY/MM/DD")
            }
            tableOfContents(maxDepth: 10)
        }
    }
`;
