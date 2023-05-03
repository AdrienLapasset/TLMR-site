import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  aside {
    font-size: 16px;
    font-family: "Söhne Buch", sans-serif;
  }
  h2 {
    font-size: 60px;
    margin-bottom: 40px;
    font-family: "SöhneBreit Buch", sans-serif;
    line-height: 60px;
    text-transform: uppercase;
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
