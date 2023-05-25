import React, { useState, useEffect, useRef } from "react";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
import AnchorNavBar from "components/global/AnchorNavBar";
import EservicesData from "components/pages/e-services/data";

const Eservices = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerHeight = 73;
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
    <Layout>
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
      />
    </Layout>
  );
};

export default Eservices;
