import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Expertise from "components/pages/expertises/Expertise";
import ExpertisesData from "components/pages/expertises/data";
import { Element } from "react-scroll";
import TwoPointsSection from "components/global/TwoPointsSection";
import PageHero from "components/global/PageHero";
import AnchorNavBar from "components/global/AnchorNavBar";
import ALaUne from "components/pages/home/sections/ALaUne";

const StyledALaUne = styled(ALaUne)`
  border-top: ${(props) => props.theme.border.black};
  padding-top: 15px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 100px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin-top: 150px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 170px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 300px;
  }
`;

const ExpertisesPage = () => {
  // TODO global Custom hook for navbar
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerHeight = 71;
  const expertisesNavRef = useRef(null);

  useEffect(() => {
    const handleIsHeaderVisible = () => {
      const currentScrollY = window.scrollY;
      const expertisesNavDistanceFromPageTop =
        expertisesNavRef.current.getBoundingClientRect().top;
      expertisesNavDistanceFromPageTop === headerHeight && setIsNavHidden(true);
      currentScrollY < scrollY && setIsNavHidden(false);
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleIsHeaderVisible);
    return () => {
      window.removeEventListener("scroll", handleIsHeaderVisible);
    };
  }, [expertisesNavRef, scrollY, isNavHidden]);

  return (
    <Layout isNavHidden={isNavHidden}>
      <PageHero
        title="Expertises"
        firstParagraph="Le cabinet Touati La Motte Rouge répond à des problématiques diverses
          avec rigueur et pragmatisme. Dans chaque domaine d’expertise, vous
          disposez de l’accompagnement et de l’expérience de l’associé qui
          traite de manière réactive, accessible et opérationnelle votre"
        secondParagraph="Dans les dossiers complexes, il est déterminant de travailler en
          équipe et d’associer des compétences et visions complémentaires. Cela
          permet une résolution opérationnelle des problématiques juridiques et
          une défense contentieuse efficace."
      />
      <AnchorNavBar
        headerHeight={headerHeight}
        data={ExpertisesData}
        expertisesNavRef={expertisesNavRef}
        isNavHidden={isNavHidden}
      />
      {ExpertisesData.map((expertise, index) => (
        <Element key={index} name={expertise.title}>
          <Expertise expertise={expertise} />
        </Element>
      ))}
      <TwoPointsSection
        title1="NOS SOLUTIONS"
        title2="VOUS FORMER"
        description1="Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage. Le cabinet TLMR a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client."
        description2="La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers™."
      />
      <StyledALaUne />
    </Layout>
  );
};

export default ExpertisesPage;
