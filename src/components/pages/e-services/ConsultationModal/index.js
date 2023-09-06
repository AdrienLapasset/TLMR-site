import React from "react";
import styled from "styled-components";
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
  button {
    padding: 20px 20px 10px 20px;
    margin-left: auto;
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

const ConsultationModal = ({ isVisible, handleModal }) => {
  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        <button type="button" onClick={handleModal}>
          <img src={croix} alt="" />
        </button>
        <iframe
          title="consultation"
          src="https://tlmr-avocats.kneo.me/iframe/56902376c9bd6ea.html"
        ></iframe>
      </StyledModal>
    </StyledContainer>
  );
};

export default ConsultationModal;
