import React from "react";
import styled from "styled-components";
import croix from "assets/icons/croix-white.svg";

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
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  @media ${(props) => props.theme.minWidth.md} {
    width: 100%;
    max-width: 1150px;
    height: auto;
  }
  button {
    cursor: pointer;
    position: relative;
    right: 10px;
    top: -10px;
    margin-left: auto;
    padding-top: 30px;
  }
  iframe {
    width: 100%;
    display: block;
    border: 0;
    height: 100%;
    @media ${(props) => props.theme.minWidth.md} {
      height: 544px;
    }
  }
`;

const SeraphinLegalModal = ({ isVisible, handleModal }) => {
  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        <button type="button" onClick={handleModal}>
          <img src={croix} alt="" />
        </button>
        <div id="Assistant"></div>
        <iframe
          title="Assistant"
          src="https://profound-horse-9a12bb.netlify.app"
        ></iframe>
      </StyledModal>
    </StyledContainer>
  );
};

export default SeraphinLegalModal;
