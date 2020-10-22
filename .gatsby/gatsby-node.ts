/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import _ from 'lodash';
import { resolve } from 'path';
import { removeEmptyOrSlash } from '../src/util';

export const onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    const isReadyToBuildBlogPath =
        node?.internal?.type === 'Mdx' && node?.frontmatter?.slug && node?.frontmatter?.category;

    if (isReadyToBuildBlogPath) {
        // markdown 轉 html url
        const slug = `blog/${removeEmptyOrSlash(node.frontmatter.category)}/${removeEmptyOrSlash(
            node.frontmatter.slug
        )}`;
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

// export const onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
//     if (stage === 'build-javascript') {
//         const { output } = getConfig();
//         const newWebpackConfig = {
//             ...getConfig(),
//             output: {
//                 filename: `js/[name]-[contenthash].js`,
//                 chunkFilename: `js/[name]-[contenthash].js`,
//                 path: output.path,
//                 publicPath: output.publicPath,
//             },
//         };

//         actions.replaceWebpackConfig(newWebpackConfig);
//     }
// };

export const createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMdx(
                filter: { frontmatter: { published: { eq: true } } }
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    // create home page
    createPage({
        path: `/`,
        component: resolve(__dirname, `../src/templates/IndexTemplate/index.tsx`),
        context: {},
    });

    // create all blog page
    // createPage({
    //     path: `/blog`,
    //     component: resolve(__dirname, `../src/templates/ArticleTemplate.tsx`),
    //     context: {},
    // });

    // create blog page
    // turn md to html page
    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: resolve(__dirname, `../src/templates/BlogTemplate/index.tsx`),
            context: {
                id: node.id,
            },
        });
    });
};

// const tags = _.uniq(
//     _.flattenDeep(result.data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.tags))
// ).filter((items) => items);
// const categories = _.uniq(result.data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.category));

// create tags page
// tags.forEach((tag: string) => {
//     createPage({
//         path: `tags/${removeEmptyOrSlash(tag)}`,
//         component: resolve(__dirname, `../src/templates/TagsTemplate.tsx`),
//         context: {
//             tag: tag,
//         },
//     });
// });

// create category page
// categories.forEach((category: string) => {
//     createPage({
//         path: `blog/${removeEmptyOrSlash(category)}`,
//         component: resolve(__dirname, `../src/templates/CategoriesTemplate.tsx`),
//         context: {
//             category: category,
//         },
//     });
// });
