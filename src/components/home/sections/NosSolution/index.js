import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "components/global/SectionDescription";
import HomeList from "../../HomeList";

const StyledContainer = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  .gatsby-image-wrapper {
    margin-bottom: 12px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 0;
      order: 1;
    }
  }
`;

const NosSolution = () => {
  return (
    <StyledContainer>
      <SectionTitle aside={"e-Services"} title={"NOS SOLUTIONS"} />
      <StaticImage
        src="../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        quality="90"
        aspectRatio={1.44}
      />
      <SectionDescription
        description={
          "Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage. Le cabinet TLMR a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client."
        }
        links={[
          { text: "En savoir plus", link: "" },
          { text: "Nous contacter", link: "" },
        ]}
      />
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
    </StyledContainer>
  );
};

export default NosSolution;
