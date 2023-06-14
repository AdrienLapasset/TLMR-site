/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Touati La Motte Rouge Avocats`,
    titleTemplate: "Touati La Motte Rouge Avocats - %s",
    siteUrl: "https://www.tlmr-avocats.com",
    description:
      "Choisissez l’Excellence Accessible Vous simplifier l’accès à l’excellence est un défi que nous relevons chaque jour, avec une magnifique équipe constituée pour vous offrir une très forte compréhension de vos enjeux techniques et juridiques, en particulier dans le domaines des technologies, de l’informatique de l’innovation, du digital, et d’internet. Le cabinet a été fondé par […]",
    author: "Adrien Lapasset",
    lang: "fr",
    keywords: ["Avocats", "Paris", "Touati", "La Motte Rouge"],
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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-plugin-netlify",
  ],
};
