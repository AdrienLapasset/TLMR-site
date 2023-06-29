import React from "react";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
import ALaUne from "components/pages/home/sections/ALaUne";
import TwoPointsSection from "components/global/TwoPointsSection";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "components/Seo";
import styled from "styled-components";

const StyledPageHero = styled(PageHero)`
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: 35px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    margin-bottom: 80px;
  }
`;
const StyledALaUne = styled(ALaUne)`
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 70px;
  }
`;
const StyledContainer = styled.div`
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 210px;
  }
  & > .gatsby-image-wrapper {
    aspect-ratio: 1;
    margin-bottom: 40px;
    @media ${(props) => props.theme.minWidth.sm} {
      aspect-ratio: 2.1;
      margin-bottom: 75px;
    }
    @media ${(props) => props.theme.minWidth.md} {
      margin-bottom: 0px;
    }
  }
`;

const Formations = () => {
  return (
    <>
      <Seo pageTitle="Formations" />
      <Layout>
        <div className="pageAnimation">
          <StyledContainer>
            <StyledPageHero
              title="Formations"
              firstParagraph="Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers. Dédié à l’accompagnement des entrepreneurs du web infopreneurs et e-commerçants, leur accompagnement inédit a permis à plusieurs centaines d’entrepreneurs d’être en conformité juridique de manière simple et rapide."
            />
            <StaticImage
              src="../assets/imgs/placeholder.jpg"
              alt="TLMR - L’excellence accessible"
              quality="90"
            />
            <TwoPointsSection
              title1="VOUS PROTÉGER"
              description1=" Vous protéger en toute circonstance que ce soit pour relever vos défis d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge Avocats répond à vos diverses problématiques avec rigueur et pragmatisme."
              link1="expertises"
              title2="NOS SOLUTIONS"
              description2="Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage. Le cabinet TLMR a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client."
              link2="formation"
            />
            <StyledALaUne border />
          </StyledContainer>
        </div>
      </Layout>
    </>
  );
};

export default Formations;
