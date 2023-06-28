import * as React from "react";
import styled, { css } from "styled-components";
import SectionTitle from "../../SectionTitle";
import Cta from "components/global/Cta";
import Paragraph from "components/global/Paragraph";
import Title from "components/global/Title";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";

const border = css`
  border-top: ${(props) => props.theme.border.black};
  padding-top: 10px;
`;

const StyledContainer = styled.div`
  ${(props) => (props.border ? border : null)}
  margin-top: 70px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 100px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 130px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin-top: 160px;
  }
  & > header {
    display: flex;
    @media ${(props) => props.theme.minWidth.sm} {
      padding-bottom: 0;
    }
    & > h2 {
      font-size: 32px;
      margin-bottom: 20px;
      @media ${(props) => props.theme.minWidth.sm} {
        margin-bottom: 40px;
        font-size: inherit;
      }
      @media ${(props) => props.theme.minWidth.md} {
        margin-bottom: 45px;
      }
    }
    & > a {
      margin-bottom: 40px;
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
  row-gap: 30px;
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
  & > div {
    overflow: hidden;
  }
  .gatsby-image-wrapper {
    transition: transform 0.3s ${(props) => props.theme.cubicBezier.base};
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.05);
    }
  }
  aside {
    margin: 5px 0;
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

  &:nth-child(3),
  &:nth-child(4) {
    display: ${({ home }) => !home && "none"};
    @media ${(props) => props.theme.minWidth.md} {
      display: block;
    }
  }
  .gatsby-image-wrapper {
    aspect-ratio: 1.6;
    @media ${(props) => props.theme.minWidth.md} {
      aspect-ratio: 1;
    }
  }
`;

const ALaUne = ({ className, home, border }) => {
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

  const { pathname } = useLocation();

  return (
    <StyledContainer className={className} border={border}>
      <header>
        {home ? (
          <SectionTitle aside="Actualités" title="À LA UNE" />
        ) : (
          <Title type="h2" size="sm">
            À la une
          </Title>
        )}
        <Cta to="/actualites">Toutes les actualités</Cta>
      </header>
      <StyledColumns>
        {articles.map(({ title, date, heroImg, slug }) => {
          const thumbImg = getImage(heroImg.asset);
          return (
            <StyledNews to={"/article/" + slug.current} key={title} home={home}>
              <div>
                <GatsbyImage image={thumbImg} alt={title} />
              </div>
              <Paragraph as="aside" size="sm">
                {new Date(date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Paragraph>
              <h3>{title}</h3>
            </StyledNews>
          );
        })}
      </StyledColumns>
      {pathname === "/" && (
        <Cta to="/actualites" className="mobile">
          Toutes les actualités
        </Cta>
      )}
    </StyledContainer>
  );
};

export default ALaUne;
