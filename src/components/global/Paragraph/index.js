import * as React from "react";
import styled from "styled-components";

// TODO refactorer en fonction de "size" et pas en fonction du minwidth
const StyledParagraph = styled.p`
  font-size: ${(props) => props.size === "xxl" && "20px"};
  ${(props) => (props.size === "lg" || props.size === "xl") && "16px"};
  ${(props) => props.size === "sm" && "12px"};
  ${(props) => props.size === "" && "14px"};

  color: ${(props) =>
    props.color === "greyLight"
      ? (props) => props.theme.colors.greyLight
      : (props) => props.theme.colors.black};

  @media ${(props) => props.theme.minWidth.lg} {
    font-size: ${(props) => props.size === "xxl" && "22px"};
    ${(props) => props.size === "xl" && "18px"};
    ${(props) => props.size === "lg" && "18px"};
    ${(props) => props.size === "sm" && "14px"}
    ${(props) => props.size === "" && "16px"};
  }

  @media ${(props) => props.theme.minWidth.xl} {
    font-size: ${(props) =>
      props.size === "xxl"
        ? "25px"
        : props.size === "xl"
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
    <StyledParagraph
      as={as}
      size={size}
      color={color}
      dangerouslySetInnerHTML={html}
      className={className}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;

Paragraph.defaultProps = {
  type: "p",
};
