import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import Cta from "components/global/Cta";
import Paragraph from "components/global/Paragraph";
import ArticleContentBlock from "components/pages/Article/ArticleContentBlock";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import linkedinLogo from "assets/logos/linkedin.svg";
import facebookLogo from "assets/logos/facebook.svg";
import twitterLogo from "assets/logos/twitter.svg";

export const query = graphql`
  query ArticleBySlug($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      title
      date
      author
      _rawContent(resolveReferences: { maxDepth: 1 })
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
      aspect-ratio: 1.6;
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
`;

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
          {_rawContent.map((content, i) => {
            let text = "";
            let italic = "";
            let imgId = "";
            if (content.children) {
              if (content.children[0].text !== undefined) {
                text = content.children[0].text;
              }
              if (content.children[0].marks !== undefined) {
                italic = content.children[0].marks[0];
              }
            }
            if (content._type === "image") {
              imgId = content.asset._ref;
            }
            return (
              <ArticleContentBlock
                key={i}
                style={content.style}
                italic={italic}
                listItem={content.listItem}
                type={content._type}
                imgId={imgId}
              >
                {text}
              </ArticleContentBlock>
            );
          })}
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default Article;
