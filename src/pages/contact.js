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
    margin-bottom: 20px;
  }
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 110px 0;
  }
  p {
    margin-bottom: 10px;
  }
`;

const Contact = () => {
  return (
    <Layout>
      <StyledContainer>
        <Title as="h1">Contact</Title>
        <Grid>
          <Paragraph>Nous appeler</Paragraph>
          <Cta as="a" href="tel:+33178766000">
            +33 1 78 76 60 00
          </Cta>
        </Grid>
      </StyledContainer>
    </Layout>
  );
};

export default Contact;
