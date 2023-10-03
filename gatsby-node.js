const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  // createRedirect({
  //   fromPath:
  //     "/e-services/generateur-de-politique-de-confidentialite-conforme-rgpd/",
  //   toPath:
  //     "/e-services#Générateur de politique de confidentialité conforme RGPD/",
  //   isPermanent: true,
  // });

  const Article = path.resolve("./src/templates/Article/index.js");

  const articleQuery = await graphql(`
    query {
      allSanityArticle {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (articleQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading Sanity articles`,
      articleQuery.errors
    );
    return;
  }

  const articles = articleQuery.data.allSanityArticle.nodes;
  if (articles.length > 0) {
    articles.forEach((article) => {
      const path = `${article.slug.current}`;
      createPage({
        path,
        component: Article,
        context: {
          slug: article.slug.current,
        },
      });
    });
  }
};
