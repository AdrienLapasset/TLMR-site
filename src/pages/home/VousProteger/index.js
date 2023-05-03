import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  margin-top: 400px;
  aside {
    font-size: 25px;
    margin-bottom: 10px;
    font-family: "Söhne Buch", sans-serif;
  }
  h2 {
    font-size: 60px;
    margin-bottom: 40px;
    font-family: "SöhneBreit Buch", sans-serif;
  }
  p {
    font-size: 25px;
    font-family: "Söhne Buch", sans-serif;
    max-width: 800px;
    margin-bottom: 20px;
  }
`;

const VousProteger = () => {
  return (
    <StyledContainer>
      <aside>Expertise</aside>
      <h2>VOUS PROTÉGER</h2>
      <p>
        Vous protéger en toute circonstance que ce soit pour relever vos défis
        d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge
        Avocats répond à des problématiques diverses avec rigueur et
        pragmatisme.
      </p>
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

export default VousProteger;
