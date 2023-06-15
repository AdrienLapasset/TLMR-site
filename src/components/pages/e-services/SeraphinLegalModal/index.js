import React from "react";
import styled from "styled-components";
import Paragraph from "components/global/Paragraph";
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
  height: 100vh;
  padding: 45px 45px 0 45px;
  @media ${(props) => props.theme.minWidth.md} {
    height: 780px;
    width: 850px;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    button {
      cursor: pointer;
      margin-left: 20px;
    }
  }
  iframe {
    width: 100%;
    display: block;
    border: 0;
    height: 100%;
    @media ${(props) => props.theme.minWidth.md} {
      height: 650px;
    }
  }
`;

const SeraphinLegalModal = ({ isVisible, handleModal }) => {
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
        <div id="Assistant"></div>
        <iframe
          title="toto"
          src="https://profound-horse-9a12bb.netlify.app"
        ></iframe>
      </StyledModal>
    </StyledContainer>
  );
};

export default SeraphinLegalModal;
