import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-top: ${(props) => (props.as === "h1" ? "100px" : "0")};
  font-size: ${(props) => (props.small ? "28px" : "32px")};
  margin-bottom: 10px;
  font-family: "SöhneBreit Buch", sans-serif;
  text-transform: ${(props) => (props.lowercase ? "none" : "uppercase")};
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: ${(props) => (props.small ? "10px" : "40px")};
    font-size: ${(props) => (props.small ? "35px" : "45px")};
  }
  @media ${(props) => props.theme.minWidth.md} {
    font-size: ${(props) => (props.small ? "35px" : "50px")};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: ${(props) => (props.small ? "45px" : "60px")};
  }
`;

const Title = ({ type, small, lowercase, children, className }) => {
  return (
    <StyledTitle
      as={type}
      className={className}
      small={small}
      lowercase={lowercase}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
