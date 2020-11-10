import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '@src/components';

const BlogTemplate: React.FC = () => {
    const { mdx } = useStaticQuery(graphql`
        query BlogPostQuery($id: String) {
            mdx(id: { eq: $id }) {
                id
                body
                frontmatter {
                    title
                }
            }
        }
    `);
    return (
        <Layout>
            <h1>{mdx?.frontmatter?.title}</h1>
            <MDXRenderer>{mdx?.body}</MDXRenderer>
        </Layout>
    );
};

export default BlogTemplate;
