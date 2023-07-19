import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "components/global/SectionDescription";

const StyledContainer = styled.div`
  margin-top: 110px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 100px;
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
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
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
      order: 0;
      margin-top: 0px;
    }
  }
`;

const VousFormer = () => {
  return (
    <StyledContainer>
      <SectionTitle aside={"Formations"} title={"VOUS FORMER"} />
      <StyledColumns>
        <StaticImage
          src="../../../../../assets/imgs/HOME/formation.jpg"
          alt="TLMR - L’excellence accessible"
          aspectRatio={1.44}
        />
        <SectionDescription
          column
          description={
            "La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean-Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne infolawyers."
          }
          links={[
            { text: "En savoir plus", to: "/formations" },
            {
              text: "Visiter infolawyers",
              to: "https://www.infolawyers.fr",
              extern: true,
            },
          ]}
        />
      </StyledColumns>
    </StyledContainer>
  );
};

export default VousFormer;
