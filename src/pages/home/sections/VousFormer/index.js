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
    margin: 20px 0 30px;
  }
`;
const StyledColumns = styled.div`
  column-count: 2;
  column-gap: 30px;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  a {
    margin-right: 40px;
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
        <p>
          La formation juridique et la transmission de notre savoir-faire sont
          au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et
          Jean-Philippe Touati sont les premiers avocats infopreneurs. Ils ont
          fondé le Programme de formation en ligne infolawyers.
        </p>
        <StyledButtonsContainer>
          <Button title={"En savoir plus"} />
          <Button title={"Visiter infolawyers"} />
        </StyledButtonsContainer>
      </StyledColumns>
    </StyledContainer>
  );
};

export default VousFormer;
