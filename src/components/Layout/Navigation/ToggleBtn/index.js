import React from "react";
import styled from "styled-components";

const ToggleBtn = ({ onClick, isNavOpen }) => {
  return (
    <StyledContainer onClick={() => onClick()} isNavOpen={isNavOpen}>
      <div>
        <span></span>
        <span></span>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-left: auto;
  display: grid;
  place-items: center;
  @media ${(props) => props.theme.minWidth.lg} {
    display: none;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 45px;
    cursor: pointer;
    span {
      background: ${(props) => props.theme.colors.black};
      height: 1px;
      margin: 5px 0;
      transition: ${(props) => props.theme.transitionTime};
      ${(props) => props.theme.cubicBezier.base};
      &:nth-of-type(1) {
        ${(props) =>
          props.isNavOpen
            ? "transform: rotatez(45deg) translate(8px, 7px)"
            : ""};
      }
      &:nth-of-type(2) {
        width: 100%;
        ${(props) => (props.isNavOpen ? "transform:rotatez(-45deg)" : "")};
      }
    }
  }
`;

export default ToggleBtn;
