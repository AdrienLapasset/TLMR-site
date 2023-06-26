import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "components/global/SectionDescription";

const StyledContainer = styled.div`
  margin-top: 110px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 160px;
  }
`;
const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${(props) => props.theme.columnGap.mobile};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
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
          src="../../../../../assets/imgs/placeholder.jpg"
          alt="TLMR - L’excellence accessible"
          quality="90"
          aspectRatio={1.44}
        />
        <SectionDescription
          column
          description={
            "Le cabinet a été fondé par M<sup>e</sup> Henri de la Motte Rouge et M<sup>e</sup> Jean-Philippe Touati, deux avocats expérimentés et passionnés aux compétences complémentaires, partageant une éthique et une vision commune de la profession d’avocat, particulièrement attachés à la qualité du service rendu au client."
          }
          links={[{ text: "Découvrez l’équipe", to: "/l-equipe" }]}
        />
      </StyledColumns>
    </StyledContainer>
  );
};

export default VosExperts;
