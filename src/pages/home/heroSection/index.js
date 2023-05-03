import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  margin-top: 400px;
  aside {
    font-size: 18px;
    margin-bottom: 15px;
    font-family: "Söhne-Kräftig", sans-serif;
  }
  h1 {
    font-size: 36px;
    max-width: 980px;
    margin-bottom: 40px;
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
        src="../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        loading="eager"
        quality="90"
        aspectRatio={1.44}
      />
    </StyledContainer>
  );
};

export default HeroSection;
