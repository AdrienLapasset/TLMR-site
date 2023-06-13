import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: ${({ type }) => (type === "h1" ? 100 : 0)}px;
  margin-bottom: 10px;
  font-family: "SöhneBreit Buch", sans-serif;
  text-transform: ${({ lowercase }) => (lowercase ? "none" : "uppercase")};
  font-size: ${({ size }) => (size === "xs" ? 28 : size === "sm" ? 28 : 32)}px;

  @media ${({ theme }) => theme.minWidth.sm} {
    margin-bottom: ${({ size }) => (size === "sm" ? 10 : 40)}px;
    font-size: ${({ size }) => (size === "sm" ? 35 : 45)}px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    font-size: ${({ size }) => (size === "sm" ? 35 : 50)}px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: ${({ size }) =>
      size === "xs" ? 30 : size === "sm" ? 45 : 60}px;
  }
`;

const Title = ({ type, size, lowercase, children, className }) => {
  return (
    <StyledTitle
      as={type}
      className={className}
      size={size}
      lowercase={lowercase}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
