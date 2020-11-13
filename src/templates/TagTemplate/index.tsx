import React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { Layout } from '@components';
import { ArticleMaker } from '@components';

type IProps = {
    data: Typing.Query;
};

const TagTemplate: React.FC<IProps> = ({ data }) => {
    return (
        <Layout>
            <ArticleMaker data={data.allMdx.edges} />
        </Layout>
    );
};
export default TagTemplate;
export const pageQuery = graphql`
    query($tag: String!) {
        allMdx(filter: { frontmatter: { published: { eq: true }, tag: { eq: $tag } } }) {
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
