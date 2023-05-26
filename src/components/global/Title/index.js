import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: ${(props) => (props.as === "h1" ? "100px" : "0")};
  margin-bottom: 10px;
  font-family: "SöhneBreit Buch", sans-serif;
  text-transform: ${(props) => (props.lowercase ? "none" : "uppercase")};
  font-size: ${(props) =>
    props.size === "xs" ? "28px" : props.size === "sm" ? "28px" : "32px"};
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: ${(props) =>
      props.size === "xs" ? "" : props.size === "sm" ? "10px" : "40px"};
    font-size: ${(props) => (props.size ? "35px" : "45px")};
  }
  @media ${(props) => props.theme.minWidth.md} {
    font-size: ${(props) =>
      props.size === "xs" ? "" : props.size === "sm" ? "35px" : "50px"};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: ${(props) =>
      props.size === "xs" ? "30px" : props.size === "sm" ? "45px" : "60px"};
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
