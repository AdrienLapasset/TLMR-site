import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import Seo from "components/Seo";
import Cta from "components/global/Cta";
import Paragraph from "components/global/Paragraph";
import Grid from "components/global/Grid";
import ALaUne from "components/pages/home/sections/ALaUne";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import linkedinLogo from "assets/logos/linkedin.svg";
import facebookLogo from "assets/logos/facebook.svg";
import twitterLogo from "assets/logos/twitter.svg";
import { PortableText } from "@portabletext/react";
import SanityImg from "gatsby-plugin-sanity-image";
import { myContext } from "provider";
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";

const StyledContainer = styled.div`
  & > .gatsby-image-wrapper {
    aspect-ratio: 1;
    margin-bottom: 10px;
    @media ${(props) => props.theme.minWidth.sm} {
      aspect-ratio: 2.25;
    }
    @media ${(props) => props.theme.minWidth.md} {
      margin-bottom: 20px;
    }
  }
`;
const StyledHeader = styled(Grid)`
  display: block;

  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
  }
  & > div {
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 1 / span 2;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 1 / span 3;
    }
  }
  h1 {
    font-size: 28px;
    line-height: 34px;
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 3 / span 10;
      font-size: 40px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 4 / span 9;
      font-size: 45px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 60px;
      line-height: 70px;
    }
  }
`;

const StyledMobileInfo = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${(props) => props.theme.columnGap.mobile};
  @media ${(props) => props.theme.minWidth.sm} {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    display: none;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  & > div {
    &:nth-child(3) {
      @media ${(props) => props.theme.minWidth.sm} {
        grid-row: 2;
      }
    }
    &:nth-child(4) {
      @media ${(props) => props.theme.minWidth.sm} {
        grid-row: 2;
      }
    }
  }
  img {
    height: 18px;
    margin: 5px 5px 0 0;
    @media ${(props) => props.theme.minWidth.sm} {
      height: 20px;
    }
  }
  a {
    font-size: 14px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 16px;
    }
  }
`;
const StyledDesktopInfo = styled.div`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
    padding-top: 15px;
  }
`;
const StyledInfoLabel = styled(Paragraph)`
  font-family: "Söhne Kräftig", sans-serif;
  font-size: 12px;
  @media ${(props) => props.theme.minWidth.sm} {
    font-size: inherit;
  }
`;
const StyledDesktopContentInfo = styled.div`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
    grid-column: 1 / span 2;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    grid-column: 1 / span 3;
  }
  img {
    height: 25px;
    margin: 7px 7px 0 0;
  }
`;
const StyledInfo = styled(Paragraph)`
  margin: 5px 0 20px;
`;
const StyledContentContainer = styled(Grid)`
  display: block;
  border-top: ${(props) => props.theme.border.black};
  padding-top: 15px;
  margin-top: 10px;
  @media ${(props) => props.theme.minWidth.lg} {
    margin-top: 20px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    margin-top: 20px;
    padding: 25px 0;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin-top: 30px;
  }
`;
const StyledContent = styled.section`
  line-height: 25px;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 3 / span 8;
    line-height: 28px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    line-height: 32px;
    grid-column: 4 / span 7;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column: 4 / span 6;
  }
  p {
    font-family: "Signifier Light";
    margin-bottom: 35px;
    em {
      font-style: normal;
      font-family: "Signifier Light Italic";
    }
  }
  h2 {
    margin: 55px 0 30px;
    font-family: "Söhne Kräftig";
    font-size: 18px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 22px;
    }
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 24px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 26px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 28px;
    }
  }
  h3 {
    font-family: "Söhne Kräftig";
    font-size: 16px;
    margin-bottom: 5px;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 18px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 20px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 22px;
    }
  }
  h4 {
    font-family: "Signifier Medium";
    font-size: 16px;
    margin-bottom: 2px;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 18px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 20px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 22px;
    }
  }
  ul {
    margin: -35px 0 35px;
    padding-left: 20px;
    li {
      font-family: "Signifier Light";
      list-style: disc;
    }
  }
  img {
    max-width: 100%;
  }
  p,
  li {
    font-size: 18px;
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 20px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 22px;
    }
  }
`;
const StyledDesktopShareBlock = styled.div`
  transition: top ${(props) => props.theme.transitionTime}s;
  position: sticky;
  top: ${({ theme, isNavHidden }) => (isNavHidden ? 30 : theme.headerHeight)}px;
`;
const StyledShareBlock = styled.div`
  margin-bottom: 30px;
  button {
    display: inline-block;
  }
`;

const ShareBlock = ({ articleUrl }) => {
  return (
    <StyledShareBlock>
      <StyledInfoLabel size="sm">Partager</StyledInfoLabel>
      <FacebookShareButton url={articleUrl}>
        <img src={facebookLogo} alt="Facebook logo" />
      </FacebookShareButton>
      <TwitterShareButton url={articleUrl}>
        <img
          src={twitterLogo}
          alt="Twitter logo"
          style={{ transform: "translateY(1px)" }}
        />
      </TwitterShareButton>
      <LinkedinShareButton url={articleUrl}>
        <img src={linkedinLogo} alt="Linkedin logo" />
      </LinkedinShareButton>
    </StyledShareBlock>
  );
};

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
          url
        }
      }
    }
  }
`;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <SanityImg asset={value.asset} alt={value.asset.filename} />
    ),
  },
};

const Article = ({ data, location }) => {
  const { title, date, author, _rawContent, heroImg } = data.sanityArticle;
  const heroImage = getImage(heroImg.asset);
  const articleDescription = _rawContent[0].children[0].text;

  return (
    <>
      <Seo
        pageTitle={title}
        articleDescription={articleDescription}
        imageUrl={heroImg.asset.url}
      />
      <myContext.Consumer>
        {(context) => (
          <Layout>
            <StyledContainer>
              <GatsbyImage image={heroImage} alt={title} />
              <StyledHeader>
                <StyledDesktopInfo>
                  <div>
                    <StyledInfoLabel size="sm">Date</StyledInfoLabel>
                    <StyledInfo size="sm">
                      {new Date(date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </StyledInfo>
                  </div>
                  <div>
                    <StyledInfoLabel size="sm">Par</StyledInfoLabel>
                    <StyledInfo size="sm">{author}</StyledInfo>
                  </div>
                </StyledDesktopInfo>
                <h1>{title}</h1>
              </StyledHeader>
              <StyledMobileInfo>
                <div>
                  <StyledInfoLabel size="sm">Date</StyledInfoLabel>
                  <StyledInfo size="sm">
                    {new Date(date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </StyledInfo>
                </div>
                <div>
                  <StyledInfoLabel size="sm">Par</StyledInfoLabel>
                  <StyledInfo size="sm">{author}</StyledInfo>
                </div>
                <ShareBlock articleUrl={location.href} />
                <div>
                  <Cta to="/contact">Nous contacter</Cta>
                </div>
              </StyledMobileInfo>
              <StyledContentContainer>
                <StyledDesktopContentInfo isNavHidden={context?.isNavHidden}>
                  <StyledDesktopShareBlock>
                    <ShareBlock articleUrl={location.href} />
                    <div>
                      <Cta to="/contact">Nous contacter</Cta>
                    </div>
                  </StyledDesktopShareBlock>
                </StyledDesktopContentInfo>
                <StyledContent>
                  <PortableText
                    value={_rawContent}
                    components={myPortableTextComponents}
                  />
                </StyledContent>
              </StyledContentContainer>
              <ALaUne article border />
            </StyledContainer>
          </Layout>
        )}
      </myContext.Consumer>
    </>
  );
};

export default Article;
