import * as React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${({ size }) =>
    size === "sm"
      ? 14
      : size === "lg" || size === "xl"
      ? 16
      : size === "xxl"
      ? 18
      : 16}px;
  line-height: ${({ size }) =>
    size === "sm"
      ? 16
      : size === "lg" || size === "xl"
      ? 20
      : size === "xxl"
      ? 23
      : 20}px;
  color: ${({ color }) =>
    color === "greyLight"
      ? ({ theme }) => theme.colors.greyLight
      : ({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.minWidth.sm} {
    font-size: ${({ size }) =>
      size === "sm"
        ? 12
        : size === "lg" || size === "xl"
        ? 16
        : size === "xxl"
        ? 20
        : 16}px;
    line-height: ${({ size }) =>
      size === "sm"
        ? 16
        : size === "lg" || size === "xl"
        ? 20
        : size === "xxl"
        ? 25
        : 20}px;
  }
  @media ${({ theme }) => theme.minWidth.lg} {
    font-size: ${({ size }) =>
      size === "sm"
        ? 14
        : size === "lg" || size === "xl"
        ? 16
        : size === "xxl"
        ? 22
        : 16}px;
    line-height: ${({ size }) =>
      size === "sm"
        ? 18
        : size === "lg" || size === "xl"
        ? 20
        : size === "xxl"
        ? 26
        : 20}px;
  }
  @media ${({ theme }) => theme.minWidth.xl} {
    font-size: ${({ size }) =>
      size === "sm"
        ? 14
        : size === "lg"
        ? 18
        : size === "xl"
        ? 20
        : size === "xxl"
        ? 25
        : 16}px;
    line-height: ${({ size }) =>
      size === "sm"
        ? 18
        : size === "lg" || size === "xl"
        ? 23
        : size === "xxl"
        ? 31
        : 20}px;
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
