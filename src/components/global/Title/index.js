import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: ${(props) => (props.small ? "28px" : "32px")};
  margin-bottom: 30px;
  font-family: "SöhneBreit Buch", sans-serif;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: ${(props) => (props.small ? "60px" : "40px")};
    font-size: ${(props) => (props.small ? "35px" : "45px")};
  }
  @media ${(props) => props.theme.minWidth.md} {
    font-size: ${(props) => (props.small ? "35px" : "50px")};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: ${(props) => (props.small ? "45px" : "60px")};
  }
`;

const Title = ({ type, small, children }) => {
  if (type === "h2") return <StyledTitle small={small}>{children}</StyledTitle>;
};

export default Title;
