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
import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 38px;
      line-height: 45px;
    }
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 3 / span 10;
      font-size: 40px;
      line-height: 50px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 4 / span 9;
      font-size: 45px;
      line-height: 55px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 50px;
      line-height: 60px;
    }
    @media ${(props) => props.theme.minWidth.xxl} {
      font-size: 55px;
      line-height: 65px;
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
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 13px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: 14px;
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
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: 15px;
  }
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
  & > :first-child {
    margin-top: 0;
  }
  p,
  a {
    font-family: "Signifier Light";
    em {
      font-style: normal;
      font-family: "Signifier Light Italic";
    }
  }
  p {
    margin-bottom: 35px;
    em > a {
      font-style: normal;
      font-family: "Signifier Light Italic";
    }
  }
  a {
    display: inline;
    text-decoration: underline;
    text-decoration-thickness: 0.8px;
    text-underline-offset: 7px;
  }
  h2 {
    margin: 55px 0 30px;
    font-family: "Söhne Kräftig";
    font-size: 22px;
    line-height: 28px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 24px;
      line-height: 30px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 28px;
      line-height: 34px;
    }
  }
  h3 {
    font-family: "Söhne Kräftig";
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 5px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 20px;
      line-height: 25px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 22px;
      line-height: 27px;
    }
  }
  h4 {
    font-family: "Signifier Medium";
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 2px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 20px;
      line-height: 30px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 22px;
      line-height: 32px;
    }
  }
  ul {
    margin: -35px 0 35px;
    padding-left: 20px;
    li {
      font-family: "Signifier Light";
      list-style: disc;
      em {
        font-style: normal;
        font-family: "Signifier Light Italic";
      }
    }
  }
  img {
    max-width: 100%;
  }
  p,
  li,
  a {
    font-size: 18px;
    line-height: 25px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 20px;
      line-height: 30px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 22px;
      line-height: 32px;
    }
  }
  .yt-lite {
    margin: 55px 0;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
      background-position: top;
      background-repeat: repeat-x;
      height: 60px;
      padding-bottom: 50px;
      width: 100%;
      transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
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
          gatsbyImageData(placeholder: NONE)
          url
        }
      }
    }
  }
`;

const myPortableTextComponents = {
  types: {
    image: ({ value }) =>
      value.link ? (
        <a href={value.link} target="_blank" rel="noreferrer">
          <SanityImg asset={value.asset} alt={value.asset.filename} />
        </a>
      ) : (
        <SanityImg asset={value.asset} alt={value.asset.filename} />
      ),
    youtube: ({ value }) => {
      const { url } = value;
      const id = getYouTubeId(url);
      return <LiteYouTubeEmbed id={id} poster="maxresdefault" />;
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value.href} target="_blank" rel="noreferrer">
        {children}
      </a>
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
