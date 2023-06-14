import React, { useState } from "react";
import styled from "styled-components";
import Paragraph from "components/global/Paragraph";
import Grid from "components/global/Grid";
import croix from "assets/icons/croix.svg";

const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all ${({ theme }) => theme.transitionTime}s
    ${({ theme }) => theme.baseCubicBezier};
  z-index: 2;
  @media ${(props) => props.theme.minWidth.md} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledModal = styled.div`
  max-height: 100vh;
  background-color: white;
  width: 100%;
  border-radius: 9px;
  overflow-y: scroll;
  @media ${(props) => props.theme.minWidth.md} {
    width: 850px;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 45px 45px 0 45px;
    button {
      cursor: pointer;
      margin-left: 20px;
    }
  }
  iframe {
    width: 100%;
    display: block;
    border: 0;
    padding: 0 10px 45px;
    height: 100vh;
    @media ${(props) => props.theme.minWidth.sm} {
      height: 650px;
      padding: 0 10px;
    }
  }
`;

const ContactModal = ({ isVisible, handleModal }) => {
  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        <header>
          <Paragraph as="h2" size="xxl">
            Nous vous remercions d’utiliser le formulaire
          </Paragraph>
          <button type="button" onClick={handleModal}>
            <img src={croix} alt="" />
          </button>
        </header>
        <iframe src="https://contrat.legapol.fr/iframe.php?mID=2&amp;eID=3"></iframe>
      </StyledModal>
    </StyledContainer>
  );
};

export default ContactModal;
