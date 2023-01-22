/* eslint-disable prettier/prettier */
const config = require("./config/config");
const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.title,
        titleTemplate: config.titleTemplate,
        description: config.description,
        image: config.image,
        siteLanguage: config.siteLanguage,
        author: config.author,
        mainUrl: config.siteUrl,
        siteUrl:
            activeEnv === "development"
                ? config.localUrl
                : `${config.siteUrl}${config.pathPrefix}`,
        canonical: config.canonical,
        twitterUsername: config.twitterUsername,
        keywords: config.keywords,
    },
    flags: {
        DEV_SSR: true,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)({ stage: 0 }),
                    //require("tailwindcss-pseudo-elements"),
                ],
            },
        },
        {
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint:
                    "https://gmail.us12.list-manage.com/subscribe/post?u=b71812872d6015a230ac978f1&amp;id=5e412d6b60&amp;f_id=00a7bde0f0", // string; add your MC list endpoint here; see instructions below
                timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            },
        },
        {
            resolve: "gatsby-plugin-snipcartv3",
            options: {
                apiKey: "ZjFlYzg0NjAtMjliZC00Y2FkLWEzNTUtYWFjY2Y2YTgyNTRhNjM3NTg0OTYwMTIxMTQ1MDYy",
                autopop: true,
            },
        },
        {
            resolve: "gatsby-plugin-purgecss",
            options: {
                printRejected: false,
                develop: false,
                tailwind: true,
                // purgeCSSOptions: {
                //     safelist: [],
                // },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `backgrounds`,
                path: `${__dirname}/src/data/images/hero`, // wherever background images are stored
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: "gatsby-plugin-svgr-loader",
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },

        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.title,
                short_name: config.shortName,
                theme_color: config.themeColor,
                background_color: config.backgroundColor,
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: config.favicon,
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
    ],
};
