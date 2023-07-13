/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Touati La Motte Rouge Avocats`,
    titleTemplate: "Touati La Motte Rouge Avocats - %s",
    siteUrl: "https://www.tlmr-avocats.com",
    description:
      "Vous simplifier l’accès à l’excellence en particulier dans les domaines des technologies, de l’informatique de l’innovation, du digital, et d’internet.",
    author: "Adrien Lapasset",
    lang: "fr",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "i7u835te",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "i7u835te",
        dataset: "production",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/imgs/favicon.jpg",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
  ],
};
