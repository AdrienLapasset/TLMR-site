import * as React from "react";
import styled from "styled-components";
import Button from "components/Button";

const StyledContainer = styled.div`
  p {
    font-size: 18px;
    font-family: "Söhne Buch", sans-serif;
    max-width: 800px;
    margin-bottom: 30px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 22px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 25px;
    }
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  a {
    margin-right: 40px;
  }
`;

const SectionDescription = ({ description, links }) => {
  const linksRender = links.map((link) => {
    return <Button title={link.text} />;
  });

  return (
    <StyledContainer>
      <p>{description}</p>
      <StyledButtonsContainer>{linksRender}</StyledButtonsContainer>
    </StyledContainer>
  );
};

export default SectionDescription;
