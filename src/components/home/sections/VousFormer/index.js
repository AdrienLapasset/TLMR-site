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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
          src="../../../../assets/imgs/placeholder.jpg"
          alt="TLMR - L’excellence accessible"
          loading="eager"
          quality="90"
          aspectRatio={1.44}
        />
        <SectionDescription
          description={
            "La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean-Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne infolawyers."
          }
          links={[
            { text: "En savoir plus", link: "" },
            { text: "Visiter infolawyers", link: "" },
          ]}
        />
      </StyledColumns>
    </StyledContainer>
  );
};

export default VousFormer;
