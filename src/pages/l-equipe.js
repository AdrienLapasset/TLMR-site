import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";
import TeammateCard from "components/pages/lequipe/TeammateCard";
import Seo from "components/Seo";

const lequipe = [
  {
    imgName: "henri",
    name: "Henri de La Motte Rouge",
    post: "Avocat associé",
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
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    imgName: "jean-philippe",
    name: "Jean-Philippe Touati",
    post: "Avocat associé",
    description:
      "Jean Philippe est avocat depuis 27 ans, essentiellement en droit des affaires et droit immobilier. Fin stratège et très expérimenté, il est réputé pour sa détermination dans les dossiers et accompagne de nombreuses entreprises et personnalités dans la résolution de dossiers complexes. Au fil des années il a noué avec ses clients une relation de grande proximité et de confiance. « La connaissance du droit ne fait pas tout. Ce que vous êtes, ce que vous faites et votre expérience sont des données essentielles que j’intègre pleinement dans l’analyse et le traitement des dossiers que vous me confiez ».",
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
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    imgName: "elea",
    name: "Eléa Bataille",
    post: "Avocate à la cour",
    description:
      "Excellente juriste, elle met sa rigueur, son talent, sa positivité et sa force de travail au service des clients du cabinet depuis sa création. Dotée d’une solide formation en corporate et droit procédural, elle s’est ensuite orientée en IP/IT et protection des données personnelles. Eléa dispose d’un excellent savoir-faire aussi bien en matière de conseil que de contentieux, notamment dans le domaine du droit des marques, cybercrimnialité, e-commerce et RGPD. Elle intervient également en contentieux des affaires, droit pénal et de la presse.",
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
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    imgName: "myriam",
    name: "Myriam Hertz Avocate à la cour",
    post: "Avocate à la cour",
    description:
      "Avec plus de dix années d’expérience en droit de l’immobilier Myriam est réputée pour la gestion rigoureuse des dossiers, sa finesse de plaidoirie et son art du combat (Aïkido 1er Dan). Au sein du cabinet elle est en charge avec Jean-Philippe du Pôle Immobilier en fort développement et accompagne la clientèle sur des problématiques de baux, copropriété, rédaction d’actes et opérations complexes aussi bien en matière de conseil que de contentieux. Enseignante et formatrice, elle a également un savoir-faire spécifique en matière de formation, ce qui constitue également l’ADN du cabinet.",
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
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    imgName: "claudia",
    name: "Claudia Gestin-Vilion",
    post: "Avocate à la cour",
    description:
      "Formée en France et à l’étranger dans des institutions et des cabinets internationaux réputés dans le domaine de la propriété intellectuelle et des technologies numériques, Claudia est une perfectionniste qui sait s’intégrer à des environnements exigeants et en perpétuel mouvement. Elle dispose d’une expertise particulière en matière de lutte contre la contrefaçon, intelligence artificielle et droit d’auteur et son recrutement coïncide avec le fort développement de la clientèle internationale et de dossiers transfrontières. Elle intervient également sur la protection des données, en contentieux commercial, en droit pénal et de la presse.",
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
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    imgName: "evanthia",
    name: "Evanthia Revel",
    post: "Avocate à la cour",
    description:
      "Spécialisée en contentieux, Evanthia intervient principalement en droit immobilier, droit de la construction et droit social où elle a été formée dans des cabinets renommés avant de rejoindre le Cabinet TLMR. Son recrutement coïncide avec le fort développement du pôle immobilier et des contentieux complexes gérés par Jean-Philippe Touati. Excellente stratège, Evanthia met au profit des clients sa rigueur et sa détermination dans une logique d’optimisation des résultats. Elle intervient en français et en anglais.",
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
    linkedinUrl: "https://www.linkedin.com",
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
const StyledColumn = styled(Grid)`
  grid-template-columns: repeat(1, 1fr);
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-columns: repeat(2, 1fr);
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
const StyledLequipeContainer = styled(Grid)`
  @media ${(props) => props.theme.minWidth.lg} {
    margin-bottom: 150px;
  }
  & > div {
    @media ${(props) => props.theme.minWidth.sm} {
      grid-column: 1 / span 6;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 1 / span 4;
    }
    &:nth-child(even) {
      @media ${(props) => props.theme.minWidth.sm} {
        grid-column: 7 / span 6;
      }
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 5 / span 4;
      }
    }
    &:nth-child(3n) {
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 9 / span 4;
      }
    }
    &:nth-child(4) {
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 1 / span 4;
      }
    }
    &:nth-child(5) {
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 5 / span 4;
      }
    }
  }
`;
const StyledSupportTeam = styled.section`
  h2 {
    margin-bottom: 10px;
  }
  aside {
    margin-bottom: 20px;
  }
`;

const Lequipe = () => {
  const [isSeeMore, setIsSeeMore] = useState(true);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth < 768 && setIsSeeMore(false);
  }, []);

  return (
    <>
      <Seo pageTitle="l'équipe" />
      <Layout>
        <StyledCabinetContainer>
          <Title pageTitle type="h2">
            Le Cabinet
          </Title>
          <StyledColumn>
            <div>
              <Paragraph size="xxl">
                Le cabinet a été fondé par Me Henri de la Motte Rouge et Me Jean
                Philippe Touati, deux avocats expérimentés et passionnés aux
                compétences complémentaires, partageant une éthique et une
                vision commune de la profession d’avocat, particulièrement
                attachés à la qualité du service rendu au client.
              </Paragraph>
              <Paragraph size="xxl">
                Outre l’excellence juridique et la réputation de son équipe, le
                cabinet s’appuie sur les compétences d’ingénieurs et d’experts
                techniques et forensiques. Il propose à ses clients des
                investigations numériques poussées, des outils et e-services
                dédiés à la productivité juridique, la simplification des
                process et à l’optimisation du service rendu.
              </Paragraph>
              <Paragraph size="xxl">
                Le cabinet intervient également dans la conception des services
                innovants de ses clients en mettant à profit des techniques
                innovantes de Legal Design.
              </Paragraph>
            </div>
            {isSeeMore && (
              <div>
                <Paragraph size="xxl">
                  Ces multiples atouts lui permettent d’offrir un accompagnement
                  de pointe ainsi que des solutions pragmatiques et
                  opérationnelles tant en matière de conseil que de contentieux
                  à une diversité de clients (grandes entreprises, start-up,
                  PME, personnalités, décideurs, entrepreneurs du web,
                  infopreneurs…). Le savoir-faire du cabinet est régulièrement
                  sollicité par d’autres cabinets d’avocats ainsi qu’au sein de
                  commissions professionnelles ou d’institutions publiques.
                </Paragraph>
                <Paragraph size="xxl">
                  Acteur du droit des affaires, le cabinet forge sa réputation
                  sur une expertise juridique reconnue en matière de propriété
                  intellectuelle, de droit de l’informatique et des données
                  personnelles, de l’e-réputation, de l’internet et du
                  e-commerce, et de la cybercriminalité. Le cabinet intervient
                  également en droit du travail, droit de l’immobilier et droit
                  pénal et sur la fiscalité des entreprises innovantes, des
                  plateformes et des entrepreneurs du web.
                </Paragraph>
              </div>
            )}
          </StyledColumn>
          <StyledSeeMoreBtn onClick={() => setIsSeeMore(!isSeeMore)}>
            Voir plus
          </StyledSeeMoreBtn>
        </StyledCabinetContainer>
        <Title type="h1">Notre équipe</Title>
        <StyledLequipeContainer>
          {lequipe.map(
            ({
              imgName,
              name,
              post,
              description,
              experiences,
              engagements,
              linkedinUrl,
            }) => (
              <TeammateCard
                key={name}
                imgName={imgName}
                name={name}
                post={post}
                description={description}
                experiences={experiences}
                engagements={engagements}
                linkedinUrl={linkedinUrl}
              />
            )
          )}
        </StyledLequipeContainer>
        <StyledSupportTeam>
          <Paragraph as="h2">Équipe support et opérationnelle</Paragraph>
          <Paragraph size="xxl">Christophe Lemée</Paragraph>
          <Paragraph as="aside" size="xxl" color="greyLight">
            Informatique et R&D e-services
          </Paragraph>
          <Paragraph size="xxl"> Thomas Gasio</Paragraph>
          <Paragraph as="aside" size="xxl" color="greyLight">
            Marketing et e-commerce
          </Paragraph>
          <Paragraph size="xxl">Goran Mladenovic</Paragraph>
          <Paragraph as="aside" size="xxl" color="greyLight">
            Administratif et Comptabilité
          </Paragraph>
        </StyledSupportTeam>
      </Layout>
    </>
  );
};

export default Lequipe;
