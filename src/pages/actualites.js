import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "components/Seo";

const StyledContainer = styled.div`
  margin: 110px 0 75px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 230px 0;
  }
`;
const StyledYearContainer = styled.div`
  margin-bottom: 50px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: 70px;
  }
  h2 {
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 15px;
    }
  }
`;
const StyledGrid = styled(Grid)`
  @media ${(props) => props.theme.minWidth.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const StyledArticleCard = styled(Link)`
  margin-bottom: 30px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-bottom: 50px;
  }
  .gatsby-image-wrapper {
    aspect-ratio: 1.6;
    @media ${(props) => props.theme.minWidth.md} {
      aspect-ratio: 1;
    }
  }
  p {
    margin: 7px 0 5px;
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
    <>
      <Seo pageTitle="Actualités" />
      <Layout>
        <StyledContainer className="pageAnimation">
          <Title type="h1">Actualités</Title>
          {years.map((year) => {
            const articlesByYear = articles.filter(
              ({ date }) => getYearFromDateString(date) === year
            );
            return (
              <StyledYearContainer key={year}>
                <Title type="h2">{year}</Title>
                <StyledGrid>
                  {articlesByYear.map(({ date, title, heroImg, slug }) => {
                    const thumbImg = getImage(heroImg.asset);
                    return (
                      <StyledArticleCard
                        key={title}
                        to={"/article/" + slug.current}
                      >
                        <GatsbyImage image={thumbImg} alt={title} />
                        <Paragraph size="sm">
                          {new Date(date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </Paragraph>
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
    </>
  );
};

export default Actualites;
