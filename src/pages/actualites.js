import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledSupportTeam = styled.section``;

const Actualites = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityArticle {
          nodes {
            title
            heroImg {
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    `
  );

  const articles = data.allSanityArticle.nodes;

  console.log(articles);

  return (
    <Layout>
      <Title as="h1">Actualités</Title>
    </Layout>
  );
};

export default Actualites;
