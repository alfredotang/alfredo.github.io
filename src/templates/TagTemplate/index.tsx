import React from 'react';
import { graphql, Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Layout } from '@components';
type IProps = {
    data: Typing.Query;
};
const TagTemplate: React.FC<IProps> = ({ data }) => {
    return (
        <Layout>
            {data.allMdx.edges.map(({ node }) => (
                <div key={node.id}>
                    <Typography variant="h4">{node.frontmatter.category}</Typography>
                    <div>
                        <Link to={`${node.fields.slug}/`}>
                            <Button variant="contained">{node.frontmatter.title}</Button>
                        </Link>
                    </div>
                    <div>
                        {node.frontmatter.tag.map((item) => (
                            <Link key={item} to={`/tag/${item}/`}>
                                <Button variant="outlined">{node.frontmatter.tag}</Button>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
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
