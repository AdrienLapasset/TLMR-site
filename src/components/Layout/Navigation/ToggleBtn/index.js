import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-left: auto;
  @media ${(props) => props.theme.minWidth.lg} {
    display: none;
  }
  div {
    display: flex;
    flex-direction: column;
    transition: all ${(props) => props.theme.transitionTime};
    ${(props) => props.theme.cubicBezier.base};
    ${(props) =>
      props.isNavOpen ? "width: 30px; height: 30px;" : "width: 45px;"};
    cursor: pointer;
    span {
      background: ${(props) => props.theme.colors.black};
      height: 1px;
      margin: 4px 0;
      transition: ${(props) => props.theme.transitionTime};
      ${(props) => props.theme.cubicBezier.base};
      &:nth-of-type(1) {
        ${(props) =>
          props.isNavOpen
            ? "transform: rotateZ(45deg) translate(6px, 6px)"
            : ""};
      }
      &:nth-of-type(2) {
        width: 100%;
        ${(props) => (props.isNavOpen ? "transform:rotatez(-45deg)" : "")};
      }
    }
  }
`;

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

export default ToggleBtn;
