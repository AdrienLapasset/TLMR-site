import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import SectionDescription from "components/global/SectionDescription";
import Grid from "components/global/Grid";
import Expertise from "components/pages/expertises/Expertise";

const expertisesData = [
  {
    title: "Innovation, Propriété intellectuelle et industrielle",
    description:
      "Vous accompagner dans des projets innovants est au cœur de l’ADN du Cabinet. La création et l’innovation exigent une compétence juridique spécifique pour laquelle le Cabinet Touati La Motte Rouge dispose d’un savoir-faire reconnu et d’une excellente maîtrise des enjeux en matière de propriété intellectuelle, sur les supports traditionnels comme sur les nouveaux médias et réseaux sociaux.<br/><br/>Le cabinet intervient en matière de conseil et de contentieux sur tous les volets de la propriété intellectuelle (droits d’auteur, logiciels, marques, dessins et modèles, brevets, noms de domaine, bases de données) et accompagnent les entreprises dans la sécurisation de leurs actifs immatériels mais aussi les créateurs, artistes, développeurs, musiciens et inventeurs dans la défense de leurs droits.",
    accordion: [
      {
        title: "Droit des Marques",
        content:
          "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
      {
        title: " Dessins et modèles et Brevets",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
      {
        title: "Droits d’auteur",
        content:
          "Dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
      {
        title: "Noms de domaine",
        content:
          "Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
    ],
    useCases: [
      "Gestion des recouvrements de charge pour des leaders du secteur de l’administration de bien.",
      "Contentieux d’annulation d’assemblée générale de copropriété (demande / défense).",
      "Assistance d’un syndic dans le cadre d’une expertise en malfaçons et vice de construction.",
      "Contestation de refus de permis de construire.",
      "Défense d’un architecte dans le cadre de sa RCP.",
      "Accompagnement de deux sociétés du CAC 40 (secteur banque assurance) sur la contractualisation de projets IT/RGPD immobiliers informatiques immeubles connectés.",
      "Négociation et rédaction de baux commerciaux.",
    ],
  },
  {
    title: "Innovation, Propriété intellectuelle et industrielle",
    description:
      "Vous accompagner dans des projets innovants est au cœur de l’ADN du Cabinet. La création et l’innovation exigent une compétence juridique spécifique pour laquelle le Cabinet Touati La Motte Rouge dispose d’un savoir-faire reconnu et d’une excellente maîtrise des enjeux en matière de propriété intellectuelle, sur les supports traditionnels comme sur les nouveaux médias et réseaux sociaux.<br/><br/>Le cabinet intervient en matière de conseil et de contentieux sur tous les volets de la propriété intellectuelle (droits d’auteur, logiciels, marques, dessins et modèles, brevets, noms de domaine, bases de données) et accompagnent les entreprises dans la sécurisation de leurs actifs immatériels mais aussi les créateurs, artistes, développeurs, musiciens et inventeurs dans la défense de leurs droits.",
    accordion: [
      {
        title: "Droit des Marques",
        content:
          "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
      {
        title: " Dessins et modèles et Brevets",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
      {
        title: "Droits d’auteur",
        content:
          "Dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
      {
        title: "Noms de domaine",
        content:
          "Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue",
      },
    ],
    useCases: [
      "Gestion des recouvrements de charge pour des leaders du secteur de l’administration de bien.",
      "Contentieux d’annulation d’assemblée générale de copropriété (demande / défense).",
      "Assistance d’un syndic dans le cadre d’une expertise en malfaçons et vice de construction.",
      "Contestation de refus de permis de construire.",
      "Défense d’un architecte dans le cadre de sa RCP.",
      "Accompagnement de deux sociétés du CAC 40 (secteur banque assurance) sur la contractualisation de projets IT/RGPD immobiliers informatiques immeubles connectés.",
      "Négociation et rédaction de baux commerciaux.",
    ],
  },
];

const StyledSectionDescription = styled(SectionDescription)`
  margin-bottom: 20px;
`;

const StyledGrid = styled(Grid)`
  p {
    grid-column: 1/12;
    @media ${(props) => props.theme.minWidth.sm} {
      grid-column: 1/10;
    }
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 1/7;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 1/5;
    }
  }
`;

const ExpertisesPage = () => {
  return (
    <Layout>
      <Title type="h1">Expertises</Title>
      <StyledSectionDescription
        description={
          "Le cabinet Touati La Motte Rouge répond à des problématiques diverses avec rigueur et pragmatisme. Dans chaque domaine d’expertise, vous disposez de l’accompagnement et de l’expérience de l’associé qui traite de manière réactive, accessible et opérationnelle votre dossier."
        }
      />
      <StyledGrid>
        <p>
          Dans les dossiers complexes, il est déterminant de travailler en
          équipe et d’associer des compétences et visions complémentaires. Cela
          permet une résolution opérationnelle des problématiques juridiques et
          une défense contentieuse efficace.
        </p>
      </StyledGrid>
      {expertisesData.map((data) => (
        <Expertise expertise={data} />
      ))}
    </Layout>
  );
};

export default ExpertisesPage;
