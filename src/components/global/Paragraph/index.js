import * as React from "react";
import styled from "styled-components";

// TODO refactorer en fonction de "size" et pas en fonction du minwidth
const StyleP = styled.p`
  font-size: ${(props) =>
    props.size === "lg" || "xl"
      ? "16px"
      : props.size === "sm"
      ? "12px"
      : "14px"};
  color: ${(props) =>
    props.color === "greyLight"
      ? (props) => props.theme.colors.greyLight
      : (props) => props.theme.colors.black};
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: ${(props) =>
      props.size === "xl"
        ? "18px"
        : props.size === "lg"
        ? "18px"
        : props.size === "sm"
        ? "14px"
        : "16px"};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: ${(props) =>
      props.size === "xl"
        ? "20px"
        : props.size === "lg"
        ? "18px"
        : props.size === "sm"
        ? "14px"
        : "16px"};
  }
`;

const Paragraph = ({ size, color, children, html, className, as }) => {
  return (
    <StyleP
      as={as}
      size={size}
      color={color}
      dangerouslySetInnerHTML={html}
      className={className}
    >
      {children}
    </StyleP>
  );
};

export default Paragraph;

Paragraph.defaultProps = {
  type: "p",
};
