import * as React from "react";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
// import AnchorNavBar from "components/global/AnchorNavBar";

const Eservices = () => {
  return (
    <Layout>
      <PageHero
        title="E-SERVICES"
        firstParagraph="Des services en ligne LegalTech pour simplifier et améliorer notre relation et votre rapport au Droit. Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage."
        secondParagraph="L’innovation est au cœur de l’ADN du cabinet Touati La Motte Rouge Avocats et de ses fondateurs, membres fondateurs d’Avotech, l’association des avocats créateurs de LegalTech. Le cabinet a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client. Notre LegalTech Deep Block™, start-up technologique opérateur de Blockchain Légale, est un laboratoire d’innovation pour le cabinet."
      />
      {/* <AnchorNavBar
        expertisesNavRef={expertisesNavRef}
        isNavHidden={isNavHidden}
        data={ExpertisesData}
      /> */}
    </Layout>
  );
};

export default Eservices;
