import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import SectionDescription from "components/global/SectionDescription";
import HomeList from "../../HomeList";
import expertisesData from "components/pages/expertises/data";

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

const VousProteger = () => {
  const expertisesTitles = expertisesData.map(({ title }) => title);
  return (
    <StyledContainer>
      <SectionTitle aside="Expertises" title="VOUS PROTÉGER" />
      <StaticImage
        src="../../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        quality="90"
        aspectRatio={1.44}
      />
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
