import React from 'react';
import { graphql } from 'gatsby';
import Driver from '@material-ui/core/Divider';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout, MDXComponents, ArticleTitle } from '@components';

type IProps = {
    data: Typing.Query;
};
const BlogTemplate: React.FC<IProps> = ({ data }) => {
    const { mdx } = data;
    return (
        <Layout title={mdx?.frontmatter?.title}>
            <ArticleTitle data={mdx} variant="h4" />
            <Driver />
            <MDXProvider components={MDXComponents}>
                <MDXRenderer>{mdx?.body}</MDXRenderer>
            </MDXProvider>
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
        }
    }
`;
