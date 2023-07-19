import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "components/global/SectionDescription";
import HomeList from "../../HomeList";
import expertisesData from "components/pages/expertises/data";

const StyledContainer = styled.div`
  margin-top: 80px;
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

const VousProteger = () => {
  const expertisesTitles = expertisesData.map(({ title }) => title);
  return (
    <StyledContainer>
      <SectionTitle aside="Expertises" title="VOUS PROTÉGER" />
      <StyledColumns>
        <StaticImage
          src="../../../../../assets/imgs/HOME/expertises_1.jpg"
          alt="TLMR - L’excellence accessible"
        />
        <StaticImage
          src="../../../../../assets/imgs/HOME/expertises_2.jpg"
          alt="TLMR - L’excellence accessible"
        />
      </StyledColumns>
      <SectionDescription
        description={
          "Vous protéger en toute circonstance que ce soit pour relever vos défis d'entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge Avocats répond à des problématiques diverses avec rigueur et pragmatisme."
        }
        links={[
          { text: "En savoir plus", to: "/expertises" },
          { text: "Nous contacter", to: "/contact" },
        ]}
      />
      <HomeList type={"Compétences"} list={expertisesTitles} />
    </StyledContainer>
  );
};

export default VousProteger;
