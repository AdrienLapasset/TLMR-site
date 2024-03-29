import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "components/global/SectionDescription";

const StyledContainer = styled.div`
  margin-top: 110px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 90px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 130px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
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
    aspect-ratio: 1;
    @media ${(props) => props.theme.minWidth.sm} {
      aspect-ratio: 1.44;
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
          src="../../../../../assets/imgs/HOME/experts.jpg"
          alt="TLMR - L’excellence accessible"
        />
        <SectionDescription
          column
          description={
            "Le cabinet a été fondé par M<span class='text-ordinal'>e</span> Henri de la Motte Rouge et M<span class='text-ordinal'>e</span> Jean-Philippe Touati, deux avocats expérimentés et passionnés, aux compétences complémentaires, partageant une éthique et une vision commune de la profession d’avocat, particulièrement attachés à la qualité du service rendu à leurs clients."
          }
          links={[{ text: "Découvrez l’équipe", to: "/l-equipe" }]}
        />
      </StyledColumns>
    </StyledContainer>
  );
};

export default VosExperts;
