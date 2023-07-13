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
  .gatsby-image-wrapper {
    margin-bottom: 12px;
    aspect-ratio: 1;
    @media ${(props) => props.theme.minWidth.sm} {
      aspect-ratio: 2.34;
      margin-bottom: 0;
      order: 1;
    }
  }
`;

const NosSolution = () => {
  const eservicesTitles = eservicesData.map(({ title }) => title);
  return (
    <StyledContainer>
      <SectionTitle aside="e-Services" title="NOS SOLUTIONS" />
      <StaticImage
        src="../../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        aspectRatio={2.34}
      />
      <SectionDescription
        description={
          "Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage. Le cabinet TLMR a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client."
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
