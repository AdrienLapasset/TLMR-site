const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath:
      "/e-services/generateur-de-politique-de-confidentialite-conforme-rgpd/",
    toPath:
      "/e-services#Générateur de politique de confidentialité conforme RGPD/",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/e-services/protection-des-creations/",
    toPath: "/e-services#Protection des créations/",
    isPermanent: true,
  });

  //   {
  //     fromPath: "/e-services/signatureelectronique/",
  //     toPath: "/e-services#Signature électronique/",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/e-services/legal-design/",
  //     toPath: "/e-services#Legal design/",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/e-services/pack-rgpd/",
  //     toPath: "/e-services/",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/e-services/avomarque-fr/",
  //     toPath: "/e-services/",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath:
  //       "/competence/droit-de-linformatique-et-des-technologies-ia-blockchain-iot/",
  //     toPath:
  //       "/expertises#Informatique, logiciel, Intelligence artificielle, Blockchain",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/propriete-intellectuelle-et-industrielle/",
  //     toPath:
  //       "/expertises#Innovation, Propriété intellectuelle et industrielle",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/donnees-personnelles-et-conformite-cnil-rgpd/",
  //     toPath: "/expertises#Données personnelles et conformité CNIL/RGPD",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/penal-et-cybercriminalite/",
  //     toPath: "/expertises#Pénal, Cybercriminalité et e‑réputation",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath:
  //       "/competence/droit-de-linternet-e-commerce-plafeforme-infopreneuriat/",
  //     toPath: "/expertises#Internet, plateformes et e‑commerce",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath:
  //       "/competence/droits-a-limage-e-reputation-medias-et-vie-privee/",
  //     toPath: "/expertises#Pénal, Cybercriminalité et e‑réputation",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/fiscalite-du-web-et-de-linnovation/",
  //     toPath:
  //       "/expertises#Innovation, Propriété intellectuelle et industrielle",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/droit-des-affaires-et-des-entreprises/",
  //     toPath: "/expertises#Affaires complexes et contentieux à risque",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/droit-immobilier/",
  //     toPath: "/expertises#Droit immobilier, copropriété, baux et construction",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/droit-du-travail-et-numerique/",
  //     toPath: "/expertises#Droit du travail numérique et de la formation",
  //     isPermanent: true,
  //   },
  //   {
  //     fromPath: "/competence/droit-de-la-formation/",
  //     toPath: "/expertises#Droit du travail numérique et de la formation",
  //     isPermanent: true,
  //   }
  // );

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
