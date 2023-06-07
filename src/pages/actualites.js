import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StyledGrid = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);
`;
const StyledContainer = styled.div`
  margin: 110px 0 75px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 110px 0;
  }
`;
const StyledYearContainer = styled.div`
  margin: 100px 0;
`;
const StyledArticleCard = styled(Link)`
  .gatsby-image-wrapper {
    aspect-ratio: 1;
  }
`;

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

  const years = [];

  const getYearFromDateString = (dateString) => {
    var date = new Date(dateString);
    var year = date.getFullYear();
    return year;
  };

  articles.map(({ date }) => {
    const articleYear = getYearFromDateString(date);
    return years.indexOf(articleYear) === -1 && years.push(articleYear);
  });

  years.sort((a, b) => b - a);

  return (
    <Layout>
      <StyledContainer>
        <Title as="h1">Actualités</Title>
        {years.map((year) => {
          const articlesByYear = articles.filter(
            ({ date }) => getYearFromDateString(date) === year
          );
          return (
            <StyledYearContainer key={year}>
              <Title as="h2">{year}</Title>
              <StyledGrid>
                {articlesByYear.map(({ date, title, heroImg, slug }) => {
                  const thumbImg = getImage(heroImg.asset);
                  return (
                    <StyledArticleCard
                      key={title}
                      to={"/article/" + slug.current}
                    >
                      <GatsbyImage image={thumbImg} alt={title} />
                      <Paragraph size="sm">{date}</Paragraph>
                      <Paragraph size="lg" as="h3">
                        {title}
                      </Paragraph>
                    </StyledArticleCard>
                  );
                })}
              </StyledGrid>
            </StyledYearContainer>
          );
        })}
      </StyledContainer>
    </Layout>
  );
};

export default Actualites;
