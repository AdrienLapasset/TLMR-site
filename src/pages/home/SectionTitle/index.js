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
  h2 {
    font-size: 32px;
    margin-bottom: 30px;
    font-family: "SöhneBreit Buch", sans-serif;
    text-transform: uppercase;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 40px;
      font-size: 55px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 60px;
    }
  }
`;

const SectionTitle = ({ aside, title }) => {
  return (
    <StyledContainer>
      <aside>{aside}</aside>
      <h2>{title}</h2>
    </StyledContainer>
  );
};

export default SectionTitle;
