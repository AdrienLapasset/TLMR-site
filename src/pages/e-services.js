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
import ConsultationModal from "components/pages/e-services/ConsultationModal";
import ContactModal from "components/pages/Contact/ContactModal";

const StyledPageHero = styled(PageHero)`
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 210px 0 10px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    padding: 210px 0 95px;
  }
`;
const StyledElement = styled(Element)`
  @media ${(props) => props.theme.minWidth.sm} {
    padding-top: 90px;
    margin-bottom: 0;
  }
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 150px;
  }
`;
const StyledEserviceContainer = styled.div`
  padding-top: 30px;
  @media ${(props) => props.theme.minWidth.sm} {
    padding-top: 0px;
  }
`;
const StyledTwoPointsSection = styled(TwoPointsSection)`
  margin-top: 20px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 170px;
  }
`;

const Eservices = () => {
  const [isDeepBlockModalModal, setIsDeepBlockModalModal] = useState(false);
  const [isSeraphinLegalModal, setIsSeraphinLegalModal] = useState(false);
  const [isConsultationModal, setIsConsultationModal] = useState(false);
  const [isContactModal, setIsContactModal] = useState(false);
  const [modalFrom, setModalFrom] = useState("");
  const twoPointsSectionRef = useRef(null);

  useEffect(() => {
    if (isDeepBlockModalModal || isSeraphinLegalModal || isConsultationModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isDeepBlockModalModal, isSeraphinLegalModal, isConsultationModal]);

  const handleDeepBlockModal = () => {
    setIsDeepBlockModalModal(!isDeepBlockModalModal);
  };
  const handleSeraphinLegalModal = () => {
    setIsSeraphinLegalModal(!isSeraphinLegalModal);
  };
  const handleConsultationModal = () => {
    setIsConsultationModal(!isConsultationModal);
  };
  const handleContactModal = (eService) => {
    setIsContactModal(!isContactModal);
    setModalFrom(eService);
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
          <StyledEserviceContainer>
            {EservicesData.map(
              ({ title, description, points, btns, imgPath }) => (
                <StyledElement key={title} name={title} id={title}>
                  <Eservice
                    title={title}
                    description={description}
                    points={points}
                    btns={btns}
                    imgPath={imgPath}
                    handleDeepBlockModal={handleDeepBlockModal}
                    handleSeraphinLegalModal={handleSeraphinLegalModal}
                    handleConsultationModal={handleConsultationModal}
                    handleContactModal={handleContactModal}
                  />
                </StyledElement>
              )
            )}
          </StyledEserviceContainer>
          <StyledTwoPointsSection
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
        <ConsultationModal
          isVisible={isConsultationModal}
          handleModal={() => handleConsultationModal()}
        />
        <ContactModal
          from={modalFrom}
          isVisible={isContactModal}
          handleModal={() => handleContactModal()}
        />
      </Layout>
    </>
  );
};

export default Eservices;
