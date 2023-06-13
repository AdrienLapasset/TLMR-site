import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";
import croix from "assets/icons/croix.svg";

const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Transition */
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.4s ${(props) => props.theme.baseCubicBezier};
`;

const StyledModal = styled.div`
  background-color: white;
  width: 100%;
  text-align: center;
  margin: 15px 0;
  button {
    cursor: pointer;
  }
`;

const ContactModal = ({ isVisible, handleModal }) => {
  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        Nous vous remercions d’utiliser le formulaire de contact
        <button type="button" onClick={handleModal}>
          <img src={croix} alt="" />
        </button>
      </StyledModal>
    </StyledContainer>
  );
};

export default ContactModal;
