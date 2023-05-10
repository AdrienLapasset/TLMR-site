import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import Button from "components/Button";
import HomeList from "../../HomeList";

const StyledContainer = styled.div`
  margin-top: 160px;
  p {
    font-size: 25px;
    font-family: "Söhne Buch", sans-serif;
    max-width: 800px;
    margin: 20px 0 30px;
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  a {
    margin-right: 40px;
  }
`;

const NosSolution = () => {
  return (
    <StyledContainer>
      <SectionTitle aside={"e-Services"} title={"NOS SOLUTIONS"} />
      <p>
        Nous accompagnons au quotidien des entreprises qui innovent et avec
        lesquelles nous parlons le même langage. Le cabinet TLMR a développé une
        suite d’e-services inédite permettant d’optimiser la relation et le
        service rendu au client.
      </p>
      <StyledButtonsContainer>
        <Button title={"En savoir plus"} />
        <Button title={"Nous contacter"} />
      </StyledButtonsContainer>
      <HomeList
        type={"e-Services"}
        list={[
          "Signature électronique",
          "Protection des créations",
          "Consultation juridique",
          "Générateur de Politique de Confidentialité conforme RGPD",
          "Legal Design",
        ]}
      />
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

export default NosSolution;
