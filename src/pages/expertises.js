import React, { useRef } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Expertise from "components/pages/expertises/Expertise";
import ExpertisesData from "components/pages/expertises/data";
import { Element } from "react-scroll";
import TwoPointsSection from "components/global/TwoPointsSection";
import PageHero from "components/global/PageHero";
import AnchorNavBar from "components/global/AnchorNavBar";
import ALaUne from "components/pages/home/sections/ALaUne";
import Seo from "components/Seo";

const StyledPageHero = styled(PageHero)`
  margin-bottom: -30px;
`;

const ExpertisesPage = () => {
  const twoPointsSectionRef = useRef(null);
  return (
    <>
      <Seo pageTitle="Expertises" />
      <Layout>
        <div className="pageAnimation">
          <StyledPageHero
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
            data={ExpertisesData}
            twoPointsSectionRef={twoPointsSectionRef}
          />
          {ExpertisesData.map((expertise, index) => (
            <Element
              key={index}
              name={expertise.title}
              id={expertise.title}
              style={{ paddingTop: "150px" }}
            >
              <Expertise expertise={expertise} />
            </Element>
          ))}
          <TwoPointsSection
            twoPointsSectionRef={twoPointsSectionRef}
            title1="NOS SOLUTIONS"
            title2="VOUS FORMER"
            link1="e-services"
            link2="formations"
            description1="Nous accompagnons au quotidien des entreprises qui innovent et avec lesquelles nous parlons le même langage. Le cabinet TLMR a développé une suite d’e-services inédite permettant d’optimiser la relation et le service rendu au client."
            description2="La formation juridique et la transmission de notre savoir-faire sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge et Jean Philippe Touati sont les premiers avocats infopreneurs. Ils ont fondé le Programme de formation en ligne Infolawyers™."
          />
          <ALaUne border />
        </div>
      </Layout>
    </>
  );
};

export default ExpertisesPage;
