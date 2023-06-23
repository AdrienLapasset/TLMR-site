import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
import AnchorNavBar from "components/global/AnchorNavBar";
import EservicesData from "components/pages/e-services/data";
import Eservice from "components/pages/e-services/Eservice";
import { Element } from "react-scroll";
import ALaUne from "components/pages/home/sections/ALaUne";
import TwoPointsSection from "components/global/TwoPointsSection";
import Seo from "components/Seo";
import SeraphinLegalModal from "components/pages/e-services/SeraphinLegalModal";
import DeepBlockModal from "components/pages/e-services/DeepBlockModal";

const StyledPageHero = styled(PageHero)`
  margin-bottom: -70px;
`;

const Eservices = () => {
  const [isDeepBlockModalModal, setIsDeepBlockModalModal] = useState(false);
  const [isSeraphinLegalModal, setIsSeraphinLegalModal] = useState(false);
  const twoPointsSectionRef = useRef(null);

  useEffect(() => {
    if (isDeepBlockModalModal || isSeraphinLegalModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isDeepBlockModalModal, isSeraphinLegalModal]);

  const handleDeepBlockModal = () => {
    setIsDeepBlockModalModal(!isDeepBlockModalModal);
  };
  const handleSeraphinLegalModal = () => {
    setIsSeraphinLegalModal(!isSeraphinLegalModal);
  };
  return (
    <>
      <Seo pageTitle="E-services" />
      <Layout>
        <div className="pageAnimation">
          <StyledPageHero
            title="E-SERVICES"
            firstParagraph="Des services en ligne LegalTech pour simplifier et améliorer notre relation et votre rapport au Droit. Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage."
            secondParagraph="L’innovation est au cœur de l’ADN du cabinet Touati La Motte Rouge Avocats et de ses fondateurs, membres fondateurs d’Avotech, l’association des avocats créateurs de LegalTech. Le cabinet a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client. Notre LegalTech Deep Block™, start-up technologique opérateur de Blockchain Légale, est un laboratoire d’innovation pour le cabinet."
          />
          <AnchorNavBar
            data={EservicesData}
            twoPointsSectionRef={twoPointsSectionRef}
            eservices
          />
          {EservicesData.map(
            ({ title, description, points, btns, imgPath }) => (
              <Element
                key={title}
                name={title}
                id={title}
                style={{ paddingTop: "150px" }}
              >
                <Eservice
                  title={title}
                  description={description}
                  points={points}
                  btns={btns}
                  imgPath={imgPath}
                  handleDeepBlockModal={handleDeepBlockModal}
                  handleSeraphinLegalModal={handleSeraphinLegalModal}
                />
              </Element>
            )
          )}
          <TwoPointsSection
            twoPointsSectionRef={twoPointsSectionRef}
            title1="VOUS PROTÉGER"
            description1=" Vous protéger en toute circonstance que ce soit pour relever vos défis d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge Avocats répond à vos diverses problématiques avec rigueur et pragmatisme."
            link1="expertises"
            title2="VOUS FORMER"
            description2="La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers™."
            link2="formations"
          />
          <ALaUne border />
        </div>
        <DeepBlockModal
          isVisible={isDeepBlockModalModal}
          handleModal={() => handleDeepBlockModal()}
        />
        <SeraphinLegalModal
          isVisible={isSeraphinLegalModal}
          handleModal={() => handleSeraphinLegalModal()}
        />
      </Layout>
    </>
  );
};

export default Eservices;
