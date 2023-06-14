import * as React from "react";
import styled, { css } from "styled-components";
import SectionTitle from "../../SectionTitle";
import Cta from "components/global/Cta";
import Title from "components/global/Title";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const border = css`
  border-top: ${(props) => props.theme.border.black};
  padding-top: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 100px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin-top: 150px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 170px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 300px;
  }
`;

const StyledContainer = styled.div`
  ${(props) => (props.border ? border : null)}
  margin-top: 160px;
  & > header {
    display: flex;
    padding-bottom: 20px;
    @media ${(props) => props.theme.minWidth.md} {
      padding-bottom: 25px;
    }
    & > a {
      margin-left: auto;
      align-self: flex-end;
      display: none;
      @media ${(props) => props.theme.minWidth.sm} {
        display: block;
      }
    }
  }
  a.mobile {
    display: block;
    margin-top: 30px;
    @media ${(props) => props.theme.minWidth.sm} {
      display: none;
    }
  }
`;
const StyledColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 20px;
  @media ${(props) => props.theme.minWidth.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
  }
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
`;
const StyledNews = styled(Link)`
  aside {
    margin: 6px 0;
    @media ${(props) => props.theme.minWidth.lg} {
      margin: 12px 0;
    }
  }
  h3 {
    font-size: 16px;
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 18px;
    }
  }
`;

const ALaUne = ({ className, home, border, article }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityArticle(limit: 4, sort: { date: DESC }) {
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

  return (
    <StyledContainer className={className} border={border}>
      <header>
        {home ? (
          <SectionTitle aside="Actualités" title="À LA UNE" />
        ) : (
          <Title>À LA UNE</Title>
        )}
        <Cta>Toutes les actualités</Cta>
      </header>
      <StyledColumns>
        {articles.map(({ title, date, heroImg, slug }) => {
          const thumbImg = getImage(heroImg.asset);
          return (
            <StyledNews to={"/article/" + slug.current} key={title}>
              <GatsbyImage image={thumbImg} alt={title} />
              <aside className="small">
                {new Date(date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </aside>
              <h3>{title}</h3>
            </StyledNews>
          );
        })}
      </StyledColumns>
      <Cta className="mobile">Toutes les actualités</Cta>
    </StyledContainer>
  );
};

export default ALaUne;
