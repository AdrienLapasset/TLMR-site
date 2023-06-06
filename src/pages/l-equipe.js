import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";
import TeammateCard from "components/pages/lequipe/TeammateCard";

const lequipe = [
  {
    imgName: "henri",
    name: "Henri de La Motte Rouge",
    post: " Avocat associé",
    description:
      "Henri est avocat. Il a plus de 12 ans d’expérience en droit des Technologies, de la propriété intellectuelle et de la protection des données personnelles et cybercriminalité. Doté d’une excellente expertise et compréhension du secteur du digital et de l’informatique, il accompagne des start-ups et des entreprises innovantes mais aussi des personnalités et décideurs. Il est réputé pour ses conseils stratégiques et opérationnels autant que pour sa combativité contentieuse et sa force mentale dans les dossiers sensibles. Il intervient également en droit des affaires, droit pénal et de la presse. Henri est aussi responsable pédagogique du cycle l’Avocat Connecté à l’École de Formation du Barreau de Paris et donne des formations auprès de la Chambre de Commerce et d’Industrie et de nombreuses conférences notamment sur la LegalTech.",
    experiences: [
      "Cabinet e-touati.com, avocat 2.0",
      "Cabinet BWT",
      "Cabinet Moreau Defarges & Bluyse",
    ],
    engagements: [
      "Cabinet e-touati.com, avocat 2.0",
      "Cabinet BWT",
      "Cabinet Moreau Defarges & Bluyse",
    ],
  },
];

const StyledCabinetContainer = styled.section`
  margin: 110px 0 75px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 110px 0;
  }
  h1 {
    margin-bottom: 30px;
  }
`;
const StyledColumn = styled.section`
  @media ${(props) => props.theme.minWidth.md} {
    column-count: 2;
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  p {
    margin-bottom: 30px;
  }
`;
const StyledSeeMoreBtn = styled(Cta)`
  @media ${(props) => props.theme.minWidth.sm} {
    display: none;
  }
`;
const StyledLequipeContainer = styled.section``;

const Lequipe = () => {
  const leCabinetParagraphs = [
    "Le cabinet a été fondé par Me Henri de la Motte Rouge et Me Jean Philippe Touati, deux avocats expérimentés et passionnés aux compétences complémentaires, partageant une éthique et une vision commune de la profession d’avocat, particulièrement attachés à la qualité du service rendu au client.",
    "Outre l’excellence juridique et la réputation de son équipe, le cabinet s’appuie sur les compétences d’ingénieurs et d’experts techniques et forensiques. Il propose à ses clients des investigations numériques poussées, des outils et e-services dédiés à la productivité juridique, la simplification des process et à l’optimisation du service rendu.",
    "Le cabinet intervient également dans la conception des services innovants de ses clients en mettant à profit des techniques innovantes de Legal Design.",
    " Ces multiples atouts lui permettent d’offrir un accompagnement de pointe ainsi que des solutions pragmatiques et opérationnelles tant en matière de conseil que de contentieux à une diversité de clients (grandes entreprises, start-up, PME, personnalités, décideurs, entrepreneurs du web, infopreneurs…). Le savoir-faire du cabinet est régulièrement sollicité par d’autres cabinets d’avocats ainsi qu’au sein de commissions professionnelles ou d’institutions publiques.",
    "Acteur du droit des affaires, le cabinet forge sa réputation sur une expertise juridique reconnue en matière de propriété intellectuelle, de droit de l’informatique et des données personnelles, de l’e-réputation, de l’internet et du e-commerce, et de la cybercriminalité. Le cabinet intervient également en droit du travail, droit de l’immobilier et droit pénal et sur la fiscalité des entreprises innovantes, des plateformes et des entrepreneurs du web.",
  ];

  const [leCabinet, setLeCabinet] = useState(leCabinetParagraphs);
  const [isSeeMore, setIsSeeMore] = useState(true);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth < 768 && setLeCabinet((useCases) => useCases.slice(0, 2));
  }, []);

  const handleSeeMore = () => {
    isSeeMore
      ? setLeCabinet(leCabinetParagraphs)
      : setLeCabinet(leCabinetParagraphs.slice(0, 2));
    setIsSeeMore(!isSeeMore);
  };

  return (
    <Layout>
      <StyledCabinetContainer>
        <Title as="h2">Le Cabinet</Title>
        <StyledColumn>
          {leCabinet.map((paragraph) => (
            <Paragraph key={paragraph} size="xxl">
              {paragraph}
            </Paragraph>
          ))}
        </StyledColumn>
        <StyledSeeMoreBtn as="button" onClick={handleSeeMore}>
          Voir plus
        </StyledSeeMoreBtn>
      </StyledCabinetContainer>
      <Title as="h1">Notre équipe</Title>
      <StyledLequipeContainer>
        {lequipe.map(
          ({ imgName, name, post, description, experiences, engagements }) => (
            <TeammateCard
              key={name}
              imgName={imgName}
              name={name}
              post={post}
              description={description}
              experiences={experiences}
              engagements={engagements}
            />
          )
        )}
      </StyledLequipeContainer>
    </Layout>
  );
};

export default Lequipe;
