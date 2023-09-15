import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "components/global/SectionDescription";
import HomeList from "../../HomeList";
import eservicesData from "components/pages/e-services/data";

const StyledContainer = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
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
  order: 0;
  @media ${(props) => props.theme.minWidth.sm} {
    order: 1;
  }
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
      aspect-ratio: 1.4;
      margin-bottom: 0;
    }
    &:last-child {
      display: none;
      @media ${(props) => props.theme.minWidth.md} {
        display: block;
      }
    }
  }
`;

const NosSolution = () => {
  const eservicesTitles = eservicesData.map(({ title }) => title);
  return (
    <StyledContainer>
      <SectionTitle aside="e-Services" title="NOS SOLUTIONS" />
      <StyledColumns>
        <StaticImage
          src="../../../../../assets/imgs/HOME/eservices_1.jpg"
          alt="TLMR - L’excellence accessible"
        />
        <StaticImage
          src="../../../../../assets/imgs/HOME/eservices_2.jpg"
          alt="TLMR - L’excellence accessible"
        />
      </StyledColumns>
      <SectionDescription
        description={
          "Nous accompagnons au quotidien des entreprises qui innovent, avec lesquelles nous parlons le même langage. Nous avons développé une suite inédite de solutions e-services permettant d'optimiser la relation et le service rendu à nos clients."
        }
        links={[
          { text: "En savoir plus", to: "/e-services" },
          { text: "Nous contacter", to: "/contact" },
        ]}
      />
      <HomeList type={"e-Services"} list={eservicesTitles} />
    </StyledContainer>
  );
};

export default NosSolution;
