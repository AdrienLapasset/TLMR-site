import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "../../SectionDescription";

const StyledContainer = styled.div`
  margin-top: 160px;
`;
const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.minWidth.md} {
    display: block;
    column-count: 2;
    column-gap: 30px;
  }
  .gatsby-image-wrapper {
    margin-bottom: 12px;
    @media ${(props) => props.theme.minWidth.sm} {
      order: 1;
      margin-top: 60px;
      margin-bottom: 0;
    }
    @media ${(props) => props.theme.minWidth.md} {
      margin-top: 0px;
    }
  }
`;

const VosExperts = () => {
  return (
    <StyledContainer>
      <SectionTitle aside={"L’équipe"} title={"VOS EXPERTS"} />
      <StyledColumns>
        <StaticImage
          src="../../../../assets/imgs/placeholder.jpg"
          alt="TLMR - L’excellence accessible"
          loading="eager"
          quality="90"
          aspectRatio={1.44}
        />
        <SectionDescription
          description={
            "Le cabinet a été fondé par Me Henri de la Motte Rouge et Me Jean-Philippe Touati, deux avocats expérimentés et passionnés aux compétences complémentaires, partageant une éthique et une vision commune de la profession d’avocat, particulièrement attachés à la qualité du service rendu au client."
          }
          links={[{ text: "Découvrez l’équipe", link: "" }]}
        />
      </StyledColumns>
    </StyledContainer>
  );
};

export default VosExperts;
