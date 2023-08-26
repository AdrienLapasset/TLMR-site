import React from "react";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
import ALaUne from "components/pages/home/sections/ALaUne";
import TwoPointsSection from "components/global/TwoPointsSection";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "components/Seo";
import styled from "styled-components";
import infolawersVideo from "assets/imgs/FORMATIONS/TLMR__info__02.mp4";

const StyledPageHero = styled(PageHero)`
  padding-bottom: 40px;
  @media ${(props) => props.theme.minWidth.sm} {
    padding-top: 210px;
  }
`;
const StyledContainer = styled.div`
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
const StyledColumns = styled.div`
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${(props) => props.theme.columnGap.mobile};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  video {
    max-width: 100%;
    display: none;
    @media ${(props) => props.theme.minWidth.md} {
      display: block;
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
            <StyledColumns>
              <StaticImage
                src="../assets/imgs/FORMATIONS/formation.jpg"
                alt="TLMR - L’excellence accessible"
              />
              <a
                href="https://www.infolawyers.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <video autoPlay muted loop playsInline>
                  <source src={infolawersVideo} type="video/mp4" />
                </video>
              </a>
            </StyledColumns>
            <TwoPointsSection
              title1="VOUS PROTÉGER"
              description1=" Vous protéger en toute circonstance que ce soit pour relever vos défis d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge Avocats répond à vos diverses problématiques avec rigueur et pragmatisme."
              link1="expertises"
              title2="NOS SOLUTIONS"
              description2="Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage. Le cabinet TLMR a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client."
              link2="e-services"
            />
            <ALaUne border />
          </StyledContainer>
        </div>
      </Layout>
    </>
  );
};

export default Formations;
