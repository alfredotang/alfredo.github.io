import React from 'react';
import { graphql, Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Layout } from '@components';

type IProps = {
    data: Typing.Query;
};
const ArticleTemplate: React.FC<IProps> = ({ data }) => {
    return (
        <Layout>
            {data.allMdx.edges.map(({ node }) => (
                <div key={node.id}>
                    <Typography variant="h4">{node.frontmatter.category}</Typography>
                    <div>
                        <Link to={`${node.fields.slug}/`}>
                            <Button variant="contained" color="primary">
                                {node.frontmatter.title}
                            </Button>
                        </Link>
                    </div>
                    <div>
                        {node.frontmatter.tag.map((item) => (
                            <div key={item}>
                                <Link to={`/tag/${item}/`}>
                                    <Button variant="text">{node.frontmatter.tag}</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
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
