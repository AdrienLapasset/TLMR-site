import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import SectionDescription from "components/global/SectionDescription";
import Grid from "components/global/Grid";
import Expertise from "components/pages/expertises/Expertise";
import Dot from "components/global/Dot";
import { Link, Element } from "react-scroll";

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
  {
    title: "Internet, plateformes et e-commerce",
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
    title: "Affaires complexes et contentieux à risque",
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
    title: "Droit immobilier, baux et construction",
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
    title: "Pénal, Cybercriminalité et e-réputation",
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
    title: "Informatique, logiciel, Intelligence artificielle, Blockchain",
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
    title: "Données personnelles et conformité CNIL/RGPD",
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
const StyledExpertiseNav = styled(Grid)`
  display: none;
  @media ${(props) => props.theme.minWidth.md} {
    position: sticky;
    top: 73px;
    background-color: white;
    display: grid;
    margin-top: 100px;
    border-top: ${(props) => props.theme.border.black};
    padding: 5px 0 10px;
  }
  @media ${(props) => props.theme.minWidth.sm} {
    top: 69px;
  }
  h3 {
    display: none;
    @media ${(props) => props.theme.minWidth.lg} {
      display: block;
      grid-column: 1 / span 4;
    }
  }
`;
const StyledNavLink = styled(Link)`
  text-align: left;
  display: flex;
  align-items: first baseline;
  color: ${(props) => props.theme.colors.greyLight};

  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.black};
    & > div {
      background-color: ${(props) => props.theme.colors.black};
    }
  }
  & > div {
    flex: 0 0 10px;
    background-color: ${(props) => props.theme.colors.greyLight};
  }
  &:nth-child(2) {
    grid-column: 1 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 5 / span 2;
    }
    grid-row: 1;
  }
  &:nth-child(3) {
    grid-column: 4 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 7 / span 2;
    }
  }
  &:nth-child(4) {
    grid-column: 7 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 9 / span 2;
    }
  }
  &:nth-child(5) {
    grid-column: 10 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 11 / span 2;
    }
  }
  &:nth-child(6) {
    grid-column: 1 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 5 / span 2;
    }
  }
  &:nth-child(7) {
    grid-column: 4 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 7 / span 2;
    }
  }
  &:nth-child(8) {
    grid-column: 7 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 9 / span 2;
    }
  }
  &:nth-child(9) {
    grid-column: 10 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 11 / span 2;
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
      <StyledExpertiseNav>
        <h3>Compétences</h3>
        {expertisesData.map(({ title }, index) => (
          <StyledNavLink
            offset={-200}
            to={index}
            activeClass="active"
            smooth
            spy
          >
            <Dot />
            {title}
          </StyledNavLink>
        ))}
      </StyledExpertiseNav>
      {expertisesData.map((data, index) => (
        <Element name={index}>
          <Expertise expertise={data} id={index} />
        </Element>
      ))}
    </Layout>
  );
};

export default ExpertisesPage;
