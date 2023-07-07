import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  top: -5px;
  margin-left: 10px;
  flex-shrink: 0;
  transition: all ${(props) => props.theme.transitionTime}s;
  ${(props) => props.theme.cubicBezier.base};
  width: 16px;
  height: 16px;
  cursor: pointer;
  transform: translateY(2px);
  @media ${(props) => props.theme.minWidth.md} {
    width: 12px;
    height: 12px;
  }
  span {
    display: block;
    transform: translateY(8px);
    background: ${(props) => props.theme.colors.black};
    height: 1px;
    transition: ${(props) => props.theme.transitionTime}s;
    ${(props) => props.theme.cubicBezier.base};
    &:nth-of-type(1) {
      ${(props) =>
        props.isSectionOpen
          ? "transform: translateY(9px)"
          : "transform: translateY(9px) rotatez(90deg)"};
    }
  }
`;

const ToggleBtn = ({ isSectionOpen }) => {
  return (
    <StyledContainer isSectionOpen={isSectionOpen}>
      <span></span>
      <span></span>
    </StyledContainer>
  );
};

export default ToggleBtn;
