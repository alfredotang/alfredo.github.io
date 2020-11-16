import { resolve } from 'path';
import appRootPath from 'app-root-path';
import YAML from 'yamljs';
const configPath = resolve(`${appRootPath}/config/build.yml`);
const config = YAML.load(configPath);

export default {
    pathPrefix: `${config.deploy.path_prefix}`,
    siteMetadata: {
        title: config.siteMetadata.title,
        description: config.siteMetadata.description,
        author: config.siteMetadata.author,
        deploy: { ...config.deploy },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `${config.siteMetadata.title}`,
        //         short_name: `${config.deploy.short_name}`,
        //         start_url: config.deploy.path_prefix || '/',
        //         description: config.siteMetadata.description,
        //         background_color: `${themeConfig.theme.primary.contrastText}`,
        //         theme_color: `${themeConfig.theme.primary.main}`,
        //         icon: `${appRootPath}${config.deploy.site_icon}`,
        //         display: `standalone`,
        //     },
        // },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            linkImagesToOriginal: false,
                            wrapperStyle: `margin-top: 20px; margin-bottom: 20px`,
                        },
                    },
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            theme: 'Dark+ (default dark)', // Or install your favorite theme from GitHub
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${appRootPath}${config.sourcePath.content}`,
            },
        },
        {
            resolve: `gatsby-plugin-tsconfig-paths`,
            options: {
                configFile: `${appRootPath}/tsconfig.json`,
            },
        },

        // codegen graphql typing for ts
        // 需要時再打開
        // `gatsby-plugin-graphql-codegen`,
    ],
};
