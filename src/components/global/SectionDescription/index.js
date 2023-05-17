import * as React from "react";
import styled from "styled-components";
import Button from "components/global/Button";

const StyledContainer = styled.div`
  p {
    font-size: 18px;
    font-family: "Söhne Buch", sans-serif;
    max-width: 800px;
    margin-bottom: 30px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 20px;
    }
    @media ${(props) => props.theme.minWidth.md} {
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

const SectionDescription = ({ description, links, className }) => {
  const linksRender = links?.map((link) => {
    return <Button text={link.text} />;
  });

  return (
    <StyledContainer className={className}>
      <p>{description}</p>
      <StyledButtonsContainer>{linksRender}</StyledButtonsContainer>
    </StyledContainer>
  );
};

export default SectionDescription;
