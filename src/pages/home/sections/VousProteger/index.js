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

const VousProteger = () => {
  return (
    <StyledContainer>
      <SectionTitle aside={"Expertise"} title={"VOUS PROTÉGER"} />
      <p>
        Vous protéger en toute circonstance que ce soit pour relever vos défis
        d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge
        Avocats répond à des problématiques diverses avec rigueur et
        pragmatisme.
      </p>
      <StyledButtonsContainer>
        <Button title={"En savoir plus"} />
        <Button title={"Nous contacter"} />
      </StyledButtonsContainer>
      <HomeList
        type={"Compétences"}
        list={[
          "Innovation, Propriété intellectuelle et industrielle",
          "Internet, plateformes et e-commerce",
          "Affaires complexes et contentieux à risque",
          "Pénal, Cybercriminalité et e-réputation",
          "Droit Immobilier, baux et construction",
          "Informatique, logiciel, Intelligence artificielle, Blockchain",
          "Données personnelles et conformité CNIL/RGPD",
          "Droit du travail numérique et de la formation",
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

export default VousProteger;
