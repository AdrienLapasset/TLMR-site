import React, { useState } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";
import ContactModal from "components/pages/contact/Modal";

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
const StyledMap = styled.iframe`
  aspect-ratio: 2;
  width: 100%;
  margin-top: 50px;
  border: 0;
  filter: grayscale();
`;

const Contact = () => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <Layout>
        <StyledContainer>
          <Title type="h1">Contact</Title>
          <Grid>
            <div>
              <div>
                <Paragraph as="aside">Nous appeler</Paragraph>
                <Cta href="tel:+33178766000">+33 1 78 76 60 00</Cta>
              </div>
              <div>
                <Paragraph as="aside">Nous écrire</Paragraph>
                <Cta onClick={handleModal}>Formulaire </Cta>
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
          <StyledMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.522656492757!2d2.315187377214123!3d48.88637569873561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb1e5e86ddb%3A0x54ec094d27f8b042!2s69%20Place%20du%20Dr%20F%C3%A9lix%20Lobligeois%2C%2075017%20Paris!5e0!3m2!1sfr!2sfr!4v1686312302965!5m2!1sfr!2sfr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></StyledMap>
        </StyledContainer>
      </Layout>
      <ContactModal isVisible={isModal} handleModal={handleModal} />
    </>
  );
};

export default Contact;
