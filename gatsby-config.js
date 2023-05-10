/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TLMR`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "i7u835te",
        dataset: "production",
      },
    },
  ],
};
