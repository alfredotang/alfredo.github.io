import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface IProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title?: string;
    ogImage?: string;
    slug?: string;
}
const SEO: FC<IProps> = (props) => {
    const { description, lang, meta, title, ogImage, slug } = props;
    const { site, allImageSharp } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        deploy {
                            site_url
                            path_prefix
                        }
                    }
                }
                allImageSharp(filter: { fluid: { originalName: { eq: "91APPLogo.jpg" } } }) {
                    nodes {
                        fluid {
                            src
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    // const defaultImage = allImageSharp.nodes[0].fluid.src;

    const mappingOgImage = (): URL => {
        // const src = ogImage || defaultImage;
        const src = ogImage || '';
        return new URL(src, site.siteMetadata.deploy.site_url);
    };

    const mappingOgUrl = (): URL => {
        const pathPrefix: string = site.siteMetadata.deploy.path_prefix;
        const siteUrl = site.siteMetadata.deploy.site_url;
        if (!slug) {
            return new URL(pathPrefix || '/', siteUrl);
        }

        const mappingSlug = slug[0] !== '/' ? `/${slug}` : slug;

        if (pathPrefix && pathPrefix !== '/') {
            return new URL(`${pathPrefix}${mappingSlug}`, siteUrl);
        }

        return new URL(slug, siteUrl);
    };

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title || site.siteMetadata.title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `viewport`,
                    content: `user-scalable = no, width=device-width`,
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                // {
                //     property: `og:url`,
                //     content: mappingOgUrl(),
                // },
                {
                    property: `og:locale`,
                    content: `zh_TW`,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                // {
                //     property: `og:image`,
                //     content: mappingOgImage(),
                // },
                {
                    property: `og:image:width`,
                    content: 1200,
                },
                {
                    property: `og:image:height`,
                    content: 628,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

export default SEO;
