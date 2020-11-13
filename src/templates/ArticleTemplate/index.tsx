import React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { Layout } from '@components';
import { ArticleMaker } from '@components';

type IProps = {
    data: Typing.Query;
};
const ArticleTemplate: React.FC<IProps> = ({ data }) => {
    return (
        <Layout>
            <ArticleMaker data={data.allMdx.edges} />
        </Layout>
    );
};

export default ArticleTemplate;
export const pageQuery = graphql`
    query {
        allMdx(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
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
