import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import Cta from "components/global/Cta";
import Paragraph from "components/global/Paragraph";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import linkedinLogo from "assets/logos/linkedin.svg";
import facebookLogo from "assets/logos/facebook.svg";
import twitterLogo from "assets/logos/twitter.svg";
import { PortableText } from "@portabletext/react";
import SanityImg from "gatsby-plugin-sanity-image";

export const query = graphql`
  query ArticleBySlug($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      title
      date
      author
      _rawContent(resolveReferences: { maxDepth: 10 })
      heroImg {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

const StyledContainer = styled.div`
  .gatsby-image-wrapper {
    aspect-ratio: 1;
    margin-bottom: 10px;
    @media ${(props) => props.theme.minWidth.md} {
      aspect-ratio: 2.25;
    }
  }
  h1 {
    font-size: 28px;
  }
`;
const StyledMobileInfo = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${(props) => props.theme.columnGap.mobile};
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  img {
    height: 18px;
    margin: 5px 5px 0 0;
  }
  a {
    font-size: 14px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 16px;
    }
  }
`;
const StyledInfoLabel = styled(Paragraph)`
  font-family: "Söhne-Kräftig", sans-serif;
`;
const StyledInfo = styled(Paragraph)`
  margin: 3px 0 20px;
`;
const StyledContent = styled.section`
  border-top: ${(props) => props.theme.border.black};
  padding: 15px 0;
  margin-top: 50px;
  p {
    font-family: "Signifier Light";
    font-size: 18px;
    margin-bottom: 30px;
    em {
      font-family: "Signifier Light Italic";
    }
  }
  h2 {
    font-size: 18px;
    margin: 55px 0 30px;
    font-family: "Söhne Kräftig";
  }
  ul {
    margin-bottom: 20px;
    li {
      font-size: 18px;
      font-family: "Signifier Light";
      &:before {
        content: "- ";
        text-indent: -5px;
      }
    }
  }
  img {
    max-width: 100%;
  }
`;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => <SanityImg asset={value.asset} />,
  },
};

const Article = ({ data }) => {
  const { title, date, author, _rawContent, heroImg } = data.sanityArticle;
  const heroImage = getImage(heroImg.asset);

  return (
    <Layout>
      <StyledContainer>
        <GatsbyImage image={heroImage} alt={title} />
        <h1>{title}</h1>
        <StyledMobileInfo>
          <div>
            <StyledInfoLabel size="sm">Date</StyledInfoLabel>
            <StyledInfo>
              {new Date(date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </StyledInfo>
          </div>
          <div>
            <StyledInfoLabel size="sm">Par</StyledInfoLabel>
            <StyledInfo>{author}</StyledInfo>
          </div>
          <div>
            <StyledInfoLabel size="sm">Partager</StyledInfoLabel>
            <img src={facebookLogo} alt="" />
            <img src={twitterLogo} alt="" />
            <img src={linkedinLogo} alt="" />
          </div>
          <div>
            <Cta>Nous contacter</Cta>
          </div>
        </StyledMobileInfo>
        <StyledContent>
          <PortableText
            value={_rawContent}
            components={myPortableTextComponents}
          />
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default Article;
