import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  margin-top: 185px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 240px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 400px;
  }
  aside {
    margin-bottom: 5px;
    font-family: "Söhne-Kräftig", sans-serif;
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
    max-width: 980px;
    margin-bottom: 40px;
    font-size: 22px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 30px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 36px;
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledContainer>
      <aside>L’excellence accessible</aside>
      <h1>
        Vous simplifier l’accès à l’excellence en particulier dans les domaines
        des technologies, de l’informatique de l’innovation, du digital, et
        d’internet.
      </h1>
      <StaticImage
        src="../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        loading="eager"
        quality="90"
        aspectRatio={1.44}
      />
    </StyledContainer>
  );
};

export default HeroSection;
