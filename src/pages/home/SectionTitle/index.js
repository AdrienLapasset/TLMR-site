import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  aside {
    font-size: 13px;
    font-family: "Söhne Buch", sans-serif;
    margin-bottom: -5px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: -8px;
      font-size: 14px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      margin-bottom: -10px;
      font-size: 16px;
    }
  }
`;
const StyledH2 = styled.h2`
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

const SectionTitle = ({ aside, title, small }) => {
  return (
    <StyledContainer>
      <aside>{aside}</aside>
      <StyledH2 small={small}>{title}</StyledH2>
    </StyledContainer>
  );
};

export default SectionTitle;
