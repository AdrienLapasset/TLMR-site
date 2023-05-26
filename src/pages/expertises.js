import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import Expertise from "components/pages/expertises/Expertise";
import ExpertisesData from "components/pages/expertises/data";
import { Element } from "react-scroll";
import Paragraph from "components/global/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import Cta from "components/global/Cta";
import PageHero from "components/global/PageHero";
import AnchorNavBar from "components/global/AnchorNavBar";
import ALaUne from "components/pages/home/sections/ALaUne";

const StyledSolutionsSection = styled.section`
  border-top: ${(props) => props.theme.border.black};
  margin-top: 300px;
  .grid {
    display: block;
    @media ${(props) => props.theme.minWidth.md} {
      display: grid;
    }
    & > div {
      grid-column: 1 / span 6;
      &:last-child {
        grid-column: 7 / span 6;
        border-top: ${(props) => props.theme.border.black};
        @media ${(props) => props.theme.minWidth.sm} {
          border-top: none;
        }
      }
      & > div {
        margin-bottom: 90px;
        @media ${(props) => props.theme.minWidth.sm} {
          column-count: 2;
          margin-bottom: 0;
        }
        @media ${(props) => props.theme.minWidth.sm} {
          grid-column-gap: ${(props) => props.theme.columnGap.lg};
        }
        @media ${(props) => props.theme.minWidth.xl} {
          grid-column-gap: ${(props) => props.theme.columnGap.xl};
        }
        a {
          margin-top: 10px;
        }
      }
    }
  }
`;
const StyledALaUne = styled(ALaUne)`
  border-top: ${(props) => props.theme.border.black};
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 100px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin-top: 150px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 170px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    margin-top: 300px;
  }
`;

const ExpertisesPage = () => {
  // TODO global Custom hook for navbar
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerHeight = 71;
  const expertisesNavRef = useRef(null);

  useEffect(() => {
    const handleIsHeaderVisible = () => {
      const currentScrollY = window.scrollY;
      const expertisesNavDistanceFromPageTop =
        expertisesNavRef.current.getBoundingClientRect().top;
      expertisesNavDistanceFromPageTop === headerHeight && setIsNavHidden(true);
      currentScrollY < scrollY && setIsNavHidden(false);
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleIsHeaderVisible);
    return () => {
      window.removeEventListener("scroll", handleIsHeaderVisible);
    };
  }, [expertisesNavRef, scrollY, isNavHidden]);

  return (
    <Layout isNavHidden={isNavHidden}>
      <PageHero
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
        headerHeight={headerHeight}
        data={ExpertisesData}
        expertisesNavRef={expertisesNavRef}
        isNavHidden={isNavHidden}
      />
      {ExpertisesData.map((expertise, index) => (
        <Element key={index} name={expertise.title}>
          <Expertise expertise={expertise} />
        </Element>
      ))}
      <StyledSolutionsSection>
        <Grid className="grid">
          <div>
            <Title as="h2">NOS SOLUTIONS</Title>
            <div>
              <StaticImage
                src="../assets/imgs/placeholder.jpg"
                alt="TLMR - L’excellence accessible"
              />
              <Paragraph>
                Nous accompagnons au quotidien des entreprises qui innovent et
                avec lesquelles nous parlons le même langage. Le cabinet TLMR a
                développé une suite d’e-services inédite permettant d’optimiser
                la relation et le service rendu au client.
              </Paragraph>
              <Cta>En savoir plus</Cta>
            </div>
          </div>
          <div>
            <Title as="h2">VOUS FORMER</Title>
            <div>
              <StaticImage
                src="../assets/imgs/placeholder.jpg"
                alt="TLMR - L’excellence accessible"
              />
              <Paragraph>
                La formation juridique et la transmission de notre savoir-faire
                sont au cœur de l’ADN du cabinet TLMR. Henri de la Motte Rouge
                et Jean Philippe Touati sont les premiers avocats infopreneurs.
                Ils ont fondé le Programme de formation en ligne Infolawyers™.
              </Paragraph>
              <Cta>En savoir plus</Cta>
            </div>
          </div>
        </Grid>
      </StyledSolutionsSection>
      <StyledALaUne />
    </Layout>
  );
};

export default ExpertisesPage;
