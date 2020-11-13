import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '@src/components';

type IProps = {
    data: Typing.Query;
};
const BlogTemplate: React.FC<IProps> = ({ data }) => {
    const { mdx } = data;
    return (
        <Layout>
            <h1>{mdx?.frontmatter?.title}</h1>
            <MDXRenderer>{mdx?.body}</MDXRenderer>
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
            }
        }
    }
`;
