import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '@components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type IProps = {
    data: Typing.Query;
};

const CategoryTemplate: React.FC<IProps> = ({ data }) => {
    return (
        <Layout>
            <Typography variant="h4">{data.allMdx.edges[0].node.frontmatter.category}</Typography>
            {data.allMdx.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <Button variant="contained">{node.frontmatter.title}</Button>
                    </Link>
                </div>
            ))}
        </Layout>
    );
};
export default CategoryTemplate;
export const pageQuery = graphql`
    query($category: String!) {
        allMdx(filter: { frontmatter: { published: { eq: true }, category: { eq: $category } } }) {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        date(formatString: "YYYY/MM/DD")
                        title
                        tag
                        category
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
