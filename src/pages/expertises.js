import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import SectionDescription from "components/global/SectionDescription";
import Grid from "components/global/Grid";
import Expertise from "components/pages/expertises/Expertise";
import ExpertiseData from "components/pages/expertises/data";
import Dot from "components/global/Dot";
import { Link, Element } from "react-scroll";
import Paragraph from "components/global/Paragraph";

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
    padding: 10px 0;
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
      <SectionDescription
        description={
          "Le cabinet Touati La Motte Rouge répond à des problématiques diverses avec rigueur et pragmatisme. Dans chaque domaine d’expertise, vous disposez de l’accompagnement et de l’expérience de l’associé qui traite de manière réactive, accessible et opérationnelle votre dossier."
        }
      />
      <StyledGrid>
        <Paragraph size="lg">
          Dans les dossiers complexes, il est déterminant de travailler en
          équipe et d’associer des compétences et visions complémentaires. Cela
          permet une résolution opérationnelle des problématiques juridiques et
          une défense contentieuse efficace.
        </Paragraph>
      </StyledGrid>
      <StyledExpertiseNav>
        <h3>Compétences</h3>
        {ExpertiseData.map(({ title }, index) => (
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
      {ExpertiseData.map((data, index) => (
        <Element name={index}>
          <Expertise expertise={data} id={index} />
        </Element>
      ))}
    </Layout>
  );
};

export default ExpertisesPage;
