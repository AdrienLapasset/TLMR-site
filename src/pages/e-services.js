import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
import AnchorNavBar from "components/global/AnchorNavBar";
import EservicesData from "components/pages/e-services/data";
import Eservice from "components/pages/e-services/Eservice";
import { Element } from "react-scroll";
import ALaUne from "components/pages/home/sections/ALaUne";
import TwoPointsSection from "components/global/TwoPointsSection";

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

const Eservices = () => {
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
        title="E-SERVICES"
        firstParagraph="Des services en ligne LegalTech pour simplifier et améliorer notre relation et votre rapport au Droit. Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage."
        secondParagraph="L’innovation est au cœur de l’ADN du cabinet Touati La Motte Rouge Avocats et de ses fondateurs, membres fondateurs d’Avotech, l’association des avocats créateurs de LegalTech. Le cabinet a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client. Notre LegalTech Deep Block™, start-up technologique opérateur de Blockchain Légale, est un laboratoire d’innovation pour le cabinet."
      />
      <AnchorNavBar
        headerHeight={headerHeight}
        data={EservicesData}
        expertisesNavRef={expertisesNavRef}
        isNavHidden={isNavHidden}
        eservices
      />
      {EservicesData.map(({ title, description, points, btns, imgPath }) => (
        <Element key={title} name={title}>
          <Eservice
            title={title}
            description={description}
            points={points}
            btns={btns}
            imgPath={imgPath}
          />
        </Element>
      ))}
      <TwoPointsSection
        title1="VOUS PROTÉGER"
        description1=" Vous protéger en toute circonstance que ce soit pour relever vos défis d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge Avocats répond à vos diverses problématiques avec rigueur et pragmatisme."
        title2="VOUS FORMER"
        description2="La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers™."
      />
      <StyledALaUne />
    </Layout>
  );
};

export default Eservices;
