import * as React from "react";
import styled from "styled-components";

const StyleP = styled.p`
  font-size: ${(props) =>
    props.size === "lg" ? "16px" : props.size === "sm" ? "12px" : "14px"};
  color: ${(props) =>
    props.color === "greyLight"
      ? (props) => props.theme.colors.greyLight
      : (props) => props.theme.colors.black};
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: ${(props) =>
      props.size === "lg" ? "18px" : props.size === "sm" ? "14px" : "16px"};
  }
`;

const Paragraph = ({ size, color, children }) => {
  return (
    <StyleP size={size} color={color}>
      {children}
    </StyleP>
  );
};

export default Paragraph;
