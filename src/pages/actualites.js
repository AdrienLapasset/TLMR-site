import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledGrid = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);
`;
const StyledArticleCard = styled(Link)``;

const Actualites = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityArticle {
          nodes {
            title
            date
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
      <StyledGrid>
        {articles.map(({ date, title, heroImg, slug }) => {
          const thumbImg = getImage(heroImg.asset);
          return (
            <StyledArticleCard key={title} to={"/article/" + slug.current}>
              <GatsbyImage image={thumbImg} alt={title} aspectRatio={1} />
              <aside>{date}</aside>
              <h3>{title}</h3>
            </StyledArticleCard>
          );
        })}
      </StyledGrid>
    </Layout>
  );
};

export default Actualites;
