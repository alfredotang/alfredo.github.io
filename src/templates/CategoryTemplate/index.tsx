import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '@components';
import Typography from '@material-ui/core/Typography';
import { ArticleMaker } from '@components';

type IProps = {
    data: Typing.Query;
};

const CategoryTemplate: React.FC<IProps> = ({ data }) => {
    return (
        <Layout>
            <Typography variant="h4">{data.allMdx.edges[0].node.frontmatter.category}</Typography>
            <ArticleMaker data={data.allMdx.edges} />
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
