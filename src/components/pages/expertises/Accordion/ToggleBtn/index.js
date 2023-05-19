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
    width: 16px;
    height: 16px;
    cursor: pointer;
    span {
      transform: translateY(8px);
      background: ${(props) => props.theme.colors.black};
      height: 1px;
      transition: ${(props) => props.theme.transitionTime};
      ${(props) => props.theme.cubicBezier.base};
      &:nth-of-type(1) {
        ${(props) =>
          props.isSectionOpen
            ? "transform: translateY(9px)"
            : "transform: translateY(9px) rotatez(90deg)"};
      }
    }
  }
`;

const ToggleBtn = ({ isSectionOpen }) => {
  return (
    <StyledContainer isSectionOpen={isSectionOpen}>
      <div>
        <span></span>
        <span></span>
      </div>
    </StyledContainer>
  );
};

export default ToggleBtn;
