import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import SectionDescription from "components/global/SectionDescription";
import Grid from "components/global/Grid";

const StyledSectionDescription = styled(SectionDescription)`
  margin: 50px 0 30px;
`;

const StyledGrid = styled(Grid)`
  p {
    grid-column: 1/12;
    @media ${(props) => props.theme.minWidth.sm} {
      grid-column: 1/10;
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
    </Layout>
  );
};

export default ExpertisesPage;
