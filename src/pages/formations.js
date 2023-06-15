import React from "react";
import Layout from "components/Layout";
import PageHero from "components/global/PageHero";
import ALaUne from "components/pages/home/sections/ALaUne";
import TwoPointsSection from "components/global/TwoPointsSection";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "components/Seo";

const Formations = () => {
  return (
    <>
      <Seo pageTitle="Formations" />
      <Layout>
        <PageHero
          title="Formations"
          firstParagraph="Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers™. Dédié à l’accompagnement des entrepreneurs du web infopreneurs et e-commerçants, leur accompagnement inédit a permis à plusieurs centaines d’entrepreneurs d’être en conformité juridique de manière simple et rapide."
        />
        <StaticImage
          src="../assets/imgs/placeholder.jpg"
          alt="TLMR - L’excellence accessible"
          quality="90"
          aspectRatio={2.1}
        />
        <TwoPointsSection
          title1="VOUS PROTÉGER"
          description1=" Vous protéger en toute circonstance que ce soit pour relever vos défis d’entreprise ou en cas de coup dur. Le cabinet Touati La Motte Rouge Avocats répond à vos diverses problématiques avec rigueur et pragmatisme."
          link1="expertises"
          title2="VOUS FORMER"
          description2="La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers™."
          link2="formation"
        />
        <ALaUne border />
      </Layout>
    </>
  );
};

export default Formations;
