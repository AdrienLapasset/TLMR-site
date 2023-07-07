import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: ${({ type }) => (type === "h1" ? 100 : 0)}px;
  margin-bottom: ${({ pageTitle }) => (pageTitle ? 20 : 10)}px;
  font-family: "SöhneBreit Buch", sans-serif;
  text-transform: ${({ lowercase }) => (lowercase ? "none" : "uppercase")};
  font-size: ${({ size }) =>
    size === "xs" ? 28 : size === "sm" || size === "expertise" ? 28 : 32}px;
  line-height: ${({ size }) =>
    size === "xs" ? 34 : size === "expertise" && 34}px;
  @media ${({ theme }) => theme.minWidth.sm} {
    margin-bottom: ${({ size }) => (size === "sm" ? 10 : 40)}px;
    font-size: ${({ size }) =>
      size === "xs" ? 28 : size === "sm" || size === "expertise" ? 35 : 45}px;
    line-height: ${({ size }) => size === "expertise" && 45}px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    font-size: ${({ size }) =>
      size === "xs"
        ? 28
        : size === "sm"
        ? 35
        : size === "expertise"
        ? 40
        : 50}px;
    line-height: ${({ size }) => size === "expertise" && 50}px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: ${({ size }) =>
      size === "xs"
        ? 28
        : size === "sm"
        ? 35
        : size === "expertise"
        ? 40
        : 55}px;
    line-height: ${({ size }) => size === "expertise" && 45}px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: ${({ size }) =>
      size === "xs"
        ? 30
        : size === "sm"
        ? 45
        : size === "expertise"
        ? 50
        : 60}px;
    line-height: ${({ size }) => size === "expertise" && 60}px;
  }
`;

const Title = ({
  type,
  size,
  lowercase,
  children,
  className,
  pageTitle,
  html,
}) => {
  return (
    <StyledTitle
      as={type}
      className={className}
      size={size}
      lowercase={lowercase}
      pageTitle={pageTitle}
      dangerouslySetInnerHTML={html}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
