import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";
import TeammateCard from "components/pages/lequipe/TeammateCard";
import lequipeData from "components/pages/lequipe/data";
import Seo from "components/Seo";

const StyledCabinetContainer = styled.section`
  margin: 160px 0 80px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 210px 0 120px;
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
    margin-bottom: 25px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 30px;
    }
  }
`;
const StyledSeeMoreBtn = styled(Cta)`
  @media ${(props) => props.theme.minWidth.sm} {
    display: none;
  }
`;
const StyledLequipeContainer = styled(Grid)`
  h1 {
    margin-bottom: 30px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 50px;
      grid-column: 1 / span 12;
    }
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin-bottom: 110px;
  }
  & > div {
    @media ${(props) => props.theme.minWidth.sm} {
      grid-column: 1 / span 6;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 1 / span 4;
    }
    &:nth-of-type(even) {
      @media ${(props) => props.theme.minWidth.sm} {
        grid-column: 7 / span 6;
      }
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 5 / span 4;
      }
    }
    &:nth-of-type(3n) {
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 9 / span 4;
      }
    }
    &:nth-of-type(4) {
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 1 / span 4;
      }
    }
    &:nth-of-type(5) {
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 5 / span 4;
      }
    }
  }
`;
const StyledSupportTeam = styled.section`
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 70px;
  }
  h2 {
    margin-bottom: 10px;
  }
  aside {
    margin-bottom: 20px;
  }
`;
const StyledParagraph = styled(Paragraph)`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

const Lequipe = () => {
  const [isParagraphHidden, setIsParagraphHidden] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth < 768 && setIsParagraphHidden(true);
  }, []);

  return (
    <>
      <Seo pageTitle="l'équipe" />
      <Layout>
        <StyledCabinetContainer className="pageAnimation">
          <Title pageTitle type="h2">
            Le Cabinet
          </Title>
          <StyledColumn>
            <div>
              <Paragraph size="xxl">
                Le cabinet a été fondé par M
                <span className="text-ordinal">e</span> Henri de la Motte Rouge
                et M<span className="text-ordinal">e</span> Jean Philippe
                Touati, deux avocats expérimentés et passionnés aux compétences
                complémentaires, partageant une éthique et une vision commune de
                la profession d’avocat, particulièrement attachés à la qualité
                du service rendu au client.
              </Paragraph>
              <Paragraph size="xxl">
                Outre l’excellence juridique et la réputation de son équipe, le
                cabinet s’appuie sur les compétences d’ingénieurs et d’experts
                techniques et forensiques. Il propose à ses clients des
                investigations numériques poussées, des outils et e-services
                dédiés à la productivité juridique, la simplification des
                process et à l’optimisation du service rendu.
              </Paragraph>
              <StyledParagraph size="xxl" hidden={isParagraphHidden}>
                Le cabinet intervient également dans la conception des services
                innovants de ses clients en mettant à profit des techniques
                innovantes de Legal Design.
              </StyledParagraph>
            </div>
            <div>
              <StyledParagraph size="xxl" hidden={isParagraphHidden}>
                Ces multiples atouts lui permettent d’offrir un accompagnement
                de pointe ainsi que des solutions pragmatiques et
                opérationnelles tant en matière de conseil que de contentieux à
                une diversité de clients (grandes entreprises, start-up, PME,
                personnalités, décideurs, entrepreneurs du web, infopreneurs…).
                Le savoir-faire du cabinet est régulièrement sollicité par
                d’autres cabinets d’avocats ainsi qu’au sein de commissions
                professionnelles ou d’institutions publiques.
              </StyledParagraph>
              <StyledParagraph size="xxl" hidden={isParagraphHidden}>
                Acteur du droit des affaires, le cabinet forge sa réputation sur
                une expertise juridique reconnue en matière de propriété
                intellectuelle, de droit de l’informatique et des données
                personnelles, de l’e-réputation, de l’internet et du e-commerce,
                et de la cybercriminalité. Le cabinet intervient également en
                droit du travail, droit de l’immobilier et droit pénal et sur la
                fiscalité des entreprises innovantes, des plateformes et des
                entrepreneurs du web.
              </StyledParagraph>
            </div>
          </StyledColumn>
          <StyledSeeMoreBtn
            onClick={() => setIsParagraphHidden(!isParagraphHidden)}
          >
            Voir {isParagraphHidden ? "plus" : "moins"}
          </StyledSeeMoreBtn>
        </StyledCabinetContainer>
        <StyledLequipeContainer>
          <Title type="h1">Notre équipe</Title>
          {lequipeData.map(
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
