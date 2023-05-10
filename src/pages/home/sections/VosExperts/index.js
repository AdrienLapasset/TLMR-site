import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import Button from "components/Button";

const StyledContainer = styled.div`
  margin-top: 160px;

  p {
    font-size: 25px;
    font-family: "Söhne Buch", sans-serif;
    max-width: 800px;
    margin-bottom: 30px;
  }
`;
const StyledColumns = styled.div`
  column-count: 2;
  column-gap: 30px;
`;

const VosExperts = () => {
  return (
    <StyledContainer>
      <SectionTitle aside={"L’équipe"} title={"VOS EXPERTS"} />
      <StyledColumns>
        <p>
          Le cabinet a été fondé par Me Henri de la Motte Rouge et Me
          Jean-Philippe Touati, deux avocats expérimentés et passionnés aux
          compétences complémentaires, partageant une éthique et une vision
          commune de la profession d’avocat, particulièrement attachés à la
          qualité du service rendu au client.
        </p>
        <Button title={"Découvrez l’équipe"} />
        <StaticImage
          src="../../../assets/imgs/placeholder.jpg"
          alt="TLMR - L’excellence accessible"
          loading="eager"
          quality="90"
          aspectRatio={1.44}
        />
      </StyledColumns>
    </StyledContainer>
  );
};

export default VosExperts;
