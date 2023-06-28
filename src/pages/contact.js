import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";
import ContactModal from "components/pages/contact/ContactModal";
import Seo from "components/Seo";

const StyledContainer = styled.div`
  margin: 160px 0 75px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 180px 0;
  }
  h1 {
    margin-bottom: 30px;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-bottom: 40px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      margin-bottom: 60px;
    }
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
        margin-bottom: 37px;
        .mt {
          margin-top: 30px;
        }
        aside {
          font-size: 15px;
          margin-bottom: 5px;
          @media ${(props) => props.theme.minWidth.sm} {
            margin-bottom: 7px;
            font-size: inherit;
          }
        }
      }
    }
  }
  a,
  button {
    overflow: visible;
    p {
      text-decoration: underline;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 7px;
      /* line-height: 37px; */
    }
  }
`;
const StyledMap = styled.iframe`
  aspect-ratio: 1;
  width: 100%;
  border: 0;
  margin: 50px 0 0;
  filter: grayscale();
  @media ${(props) => props.theme.minWidth.sm} {
    aspect-ratio: 2;
    margin: 5px 0 -40px;
  }
`;

const Contact = () => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isModal]);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <Seo pageTitle="Contact" />
      <Layout>
        <StyledContainer className="pageAnimation">
          <Title type="h1">Contact</Title>
          <Grid>
            <div>
              <div>
                <Paragraph as="aside">Nous appeler</Paragraph>
                <Cta href="tel:+33178766000">
                  <Paragraph size="xxl">+33 1 78 76 60 00</Paragraph>
                </Cta>
              </div>
              <div>
                <Paragraph as="aside">Nous écrire</Paragraph>
                <Cta onClick={handleModal}>
                  <Paragraph size="xxl">Formulaire</Paragraph>
                </Cta>
              </div>
              <div>
                <Paragraph as="aside">
                  En cas d’urgence, vous pouvez nous contacter par mail
                </Paragraph>
                <Paragraph size="xxl">
                  M<span className="text-ordinal">e</span> Henri de la Motte
                  Rouge
                </Paragraph>
                <Cta href="mailto:lamotterouge@tlmr-avocats.com">
                  <Paragraph size="xxl">
                    lamotterouge@tlmr-avocats.com
                  </Paragraph>
                </Cta>
                <Paragraph className="mt" size="xxl">
                  M<span className="text-ordinal">e</span> Jean-Philippe Touati
                </Paragraph>
                <Cta href="mailto:touati@tlmr-avocats.com">
                  <Paragraph size="xxl">touati@tlmr-avocats.com</Paragraph>
                </Cta>
              </div>
            </div>
            <div>
              <div>
                <Paragraph as="aside">Notre adresse</Paragraph>
                <Paragraph size="xxl">
                  69 place du Docteur Félix Lobligeois
                  <br />
                  75017 Paris
                </Paragraph>
              </div>
              <div>
                <Paragraph as="aside">Accés</Paragraph>
                <Paragraph size="xxl">Métro Pont Cardinet (Ligne 14)</Paragraph>
                <Paragraph size="xxl"> Villiers (Ligne 3)</Paragraph>
                <Paragraph size="xxl"> Rome (Ligne 2)</Paragraph>
                <Paragraph size="xxl">Brochant (Ligne 13) </Paragraph>
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
        <ContactModal isVisible={isModal} handleModal={() => handleModal()} />
      </Layout>
    </>
  );
};

export default Contact;
