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
  position: relative;
  @media ${(props) => props.theme.minWidth.md} {
    width: 850px;
  }
  button {
    position: absolute;
    top: 0px;
    left: 0px;
    cursor: pointer;
    @media ${(props) => props.theme.minWidth.sm} {
      top: 20px;
      left: 20px;
    }
  }
  iframe {
    width: 100%;
    display: block;
    border: 0;
    height: 100vh;
    @media ${(props) => props.theme.minWidth.sm} {
      height: 650px;
    }
  }
`;

const DeepBlockModal = ({ isVisible, handleModal }) => {
  return (
    <StyledContainer isVisible={isVisible}>
      <StyledModal>
        <button type="button" onClick={handleModal}>
          <img src={croix} alt="" />
        </button>
        <iframe
          title="Deep Block"
          src="https://form.openlogs.fr/form?token=6184f83054bf3d3aa550d43e10ba309fc30ddc4c6b568f508b7d7b9d0f872847"
        ></iframe>
      </StyledModal>
    </StyledContainer>
  );
};

export default DeepBlockModal;
