import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

export const query = graphql`
  query ArticleBySlug($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      title
    }
  }
`;

const Article = ({ data }) => {
  const article = data.sanityArticle;
  return (
    <Layout>
      <h1>{article.title}</h1>
    </Layout>
  );
};

export default Article;
