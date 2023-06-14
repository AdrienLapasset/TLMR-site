import React, { useRef } from "react";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
import AnchorNavBar from "components/global/AnchorNavBar";
import EservicesData from "components/pages/e-services/data";
import Eservice from "components/pages/e-services/Eservice";
import { Element } from "react-scroll";
import ALaUne from "components/pages/home/sections/ALaUne";
import TwoPointsSection from "components/global/TwoPointsSection";
import { Script } from "gatsby";

const Eservices = () => {
  const twoPointsSectionRef = useRef(null);

  const assistantString =
    '$.ajax({headers: {assistantSavedCode: new URLSearchParams(window.location.search).get("assistantSavedCode"),},url: "https://assistant.api.seraphin.legal/api/v2/Assistant/b41c8e76-dace-4c7e-aa5a-1c8f4a906cb3/37df2c0b-a144-4dbb-ae22-a758e19de55e/Viewer?lang=fr",method: "POST",type: "POST",}).done(function (data) {$("#Assistant").html(data);run();});';

  return (
    <Layout>
      <PageHero
        title="E-SERVICES"
        firstParagraph="Des services en ligne LegalTech pour simplifier et améliorer notre relation et votre rapport au Droit. Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage."
        secondParagraph="L’innovation est au cœur de l’ADN du cabinet Touati La Motte Rouge Avocats et de ses fondateurs, membres fondateurs d’Avotech, l’association des avocats créateurs de LegalTech. Le cabinet a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client. Notre LegalTech Deep Block™, start-up technologique opérateur de Blockchain Légale, est un laboratoire d’innovation pour le cabinet."
      />
      <AnchorNavBar
        data={EservicesData}
        twoPointsSectionRef={twoPointsSectionRef}
        eservices
      />
      {EservicesData.map(({ title, description, points, btns, imgPath }) => (
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
          />
        </Element>
      ))}
      <TwoPointsSection
        twoPointsSectionRef={twoPointsSectionRef}
        title1="VOUS PROTÉGER"
        description1=" Vous protéger en toute circonstance que ce soit pour relever vos défis d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge Avocats répond à vos diverses problématiques avec rigueur et pragmatisme."
        title2="VOUS FORMER"
        description2="La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers™."
      />
      <ALaUne border />
      {/* <Script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js" />
      <Script
        // strategy="idle"
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: assistantString }}
      /> */}
    </Layout>
  );
};

export default Eservices;
