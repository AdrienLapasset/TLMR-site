import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "components/global/Grid";

const StyledContainer = styled.div`
  margin-top: calc(185px + ${({ theme }) => theme.headerHeightMobile}px);
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 240px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 330px;
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
    font-size: 22px;
    line-height: 27px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 25px;
      line-height: 31px;
      max-width: 750px;
      grid-column: 1 / 13;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      /* grid-column: 1 / 9; */
      font-size: 30px;
      line-height: 39px;
      margin-bottom: 35px;
      max-width: 900px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 36px;
      line-height: 45px;
      max-width: 970px;
    }
    @media ${(props) => props.theme.minWidth.xxl} {
      font-size: 36px;
      line-height: 45px;
      /* grid-column: 1 / 8; */
    }
  }
  .gatsby-image-wrapper {
    aspect-ratio: 1;
    @media ${(props) => props.theme.minWidth.sm} {
      aspect-ratio: 1.8;
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledContainer>
      <aside>L’excellence accessible</aside>
      <Grid>
        <h1>
          Vous simplifier l’accès à l’excellence en particulier dans les
          domaines des technologies, de l’informatique de&nbsp;l’innovation,
          du&nbsp;digital, et d’internet.
        </h1>
      </Grid>
      <StaticImage
        src="../../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        quality="90"
        loading="eager"
      />
    </StyledContainer>
  );
};

export default HeroSection;
