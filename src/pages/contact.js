import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";

const StyledContainer = styled.div`
  margin: 110px 0 75px;
  h1 {
    margin-bottom: 30px;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-bottom: 40px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      margin-bottom: 60px;
    }
  }
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 110px 0;
  }

  & > div {
    & > div {
      &:first-child {
        grid-column: 1 / span 6;
      }
      &:last-child {
        grid-column: 7 / span 6;
      }
      & > div {
        margin-bottom: 30px;
        .mt {
          margin-top: 20px;
        }
        aside {
          margin-bottom: 7px;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <StyledContainer>
        <Title as="h1">Contact</Title>
        <Grid>
          <div>
            <div>
              <Paragraph as="aside">Nous appeler</Paragraph>
              <Cta href="tel:+33178766000">+33 1 78 76 60 00</Cta>
            </div>
            <div>
              <Paragraph as="aside">Nous écrire</Paragraph>
              <Cta onClick>Formulaire </Cta>
            </div>
            <div>
              <Paragraph as="aside">
                En cas d’urgence, vous pouvez nous contacter par mail
              </Paragraph>
              <Paragraph size="lg">Me Henri de la Motte Rouge</Paragraph>
              <Cta href="mailto:lamotterouge@tlmr-avocats.com">
                lamotterouge@tlmr-avocats.com
              </Cta>
              <Paragraph className="mt" size="lg">
                {" "}
                Me Jean-Philippe Touati
              </Paragraph>
              <Cta href="mailto:touati@tlmr-avocats.com">
                touati@tlmr-avocats.com
              </Cta>
            </div>
          </div>
          <div>
            <div>
              <Paragraph as="aside">Notre adresse</Paragraph>
              <Paragraph size="lg">
                69 place du Docteur Félix Lobligeois 75017 Paris
              </Paragraph>
            </div>
            <div>
              <Paragraph as="aside">Accés</Paragraph>
              <Paragraph size="lg">Métro Pont Cardinet (Ligne 14)</Paragraph>
              <Paragraph size="lg"> Villiers (Ligne 3)</Paragraph>
              <Paragraph size="lg"> Rome (Ligne 2)</Paragraph>
              <Paragraph size="lg">Brochant (Ligne 13) </Paragraph>
            </div>
          </div>
        </Grid>
      </StyledContainer>
    </Layout>
  );
};

export default Contact;
