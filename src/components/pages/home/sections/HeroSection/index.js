import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import heroVideoDesktop from "assets/videos/TLMR_ Home 16-9 website.mp4";
import heroVideoMobile from "assets/videos/TLMR_ Home 1-1 website.mp4";

const StyledContainer = styled.div`
  padding-top: calc(185px + ${({ theme }) => theme.headerHeightMobile}px);
  @media ${(props) => props.theme.minWidth.sm} {
    padding-top: 250px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    padding-top: 200px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    padding-top: 285px;
  }
  @media ${(props) => props.theme.minWidth.xxl} {
    padding-top: 315px;
  }
  aside {
    margin-bottom: 5px;
    font-family: "Söhne Kräftig", sans-serif;
    font-size: 13px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 8px;
      font-size: 16px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 18px;
    }
  }
  h1 {
    margin-bottom: 20px;
    font-size: 21px;
    line-height: 26px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 25px;
      line-height: 31px;
      max-width: 750px;
      grid-column: 1 / 13;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 30px;
      line-height: 39px;
      margin-bottom: 35px;
      max-width: 900px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 36px;
      line-height: 45px;
      max-width: 980px;
    }
    @media ${(props) => props.theme.minWidth.xxl} {
      font-size: 36px;
      line-height: 45px;
    }

    &.mobile {
      @media ${(props) => props.theme.minWidth.sm} {
        display: none;
      }
    }
    &.desktop {
      display: none;
      @media ${(props) => props.theme.minWidth.sm} {
        display: block;
      }
    }
  }
  .gatsby-image-wrapper {
    aspect-ratio: 1;
    @media ${(props) => props.theme.minWidth.sm} {
      aspect-ratio: 1.8;
    }
  }
`;
const StyledVideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  @media ${(props) => props.theme.minWidth.sm} {
    aspect-ratio: 1.78;
  }
  video {
    width: 100%;
  }
`;

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      screenWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledContainer>
      <aside>L’excellence accessible</aside>
      <Grid>
        <h1 className="mobile">
          Vous simplifier l’accès à l’excellence, en&nbsp;particulier dans les
          domaines des&nbsp;technologies, de l’informatique, du&nbsp;digital, de
          l’innovation, du web, de&nbsp;l’e&#8209;commerce, de l’immobilier
          et&nbsp;le traitement de vos affaires complexes.
        </h1>
        <h1 className="desktop">
          Vous simplifier l’accès à l’excellence, en particulier dans
          les&nbsp;domaines des technologies, de l’informatique, du digital,
          de&nbsp;l’innovation, du web, de l’e&#8209;commerce, de l’immobilier
          et&nbsp;le&nbsp;traitement de vos affaires complexes.
        </h1>
      </Grid>
      <StyledVideoContainer>
        {isMobile === true && (
          <video autoPlay muted loop playsInline>
            <source src={heroVideoMobile} type="video/mp4" />
          </video>
        )}
        {isMobile === false && (
          <video autoPlay muted loop playsInline>
            <source src={heroVideoDesktop} type="video/mp4" />
          </video>
        )}
      </StyledVideoContainer>
    </StyledContainer>
  );
};

export default HeroSection;
