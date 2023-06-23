import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";

const StyledContainer = styled(Grid)`
  margin: 110px 0 75px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin: 230px 0;
  }
  h1 {
    margin-bottom: 40px;
    grid-column: 1/12;
  }
  p {
    &:first-of-type {
      margin-bottom: 30px;
      grid-column: 1/12;
      @media ${(props) => props.theme.minWidth.sm} {
        grid-column: 1 / span 12;
      }
      @media ${(props) => props.theme.minWidth.md} {
        grid-column: 1 / span 9;
      }
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 1 / span 7;
      }
    }
    &:last-of-type {
      grid-column: 1/12;
      @media ${(props) => props.theme.minWidth.sm} {
        grid-column: 1 / span 8;
      }
      @media ${(props) => props.theme.minWidth.md} {
        grid-column: 1/7;
      }
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 1 / span 5;
      }
    }
  }
`;

const PageHero = ({ title, firstParagraph, secondParagraph }) => {
  return (
    <StyledContainer>
      <Title type="h1">{title}</Title>
      <Paragraph size="xxl">{firstParagraph}</Paragraph>
      <Paragraph size="lg">{secondParagraph}</Paragraph>
    </StyledContainer>
  );
};

export default PageHero;
