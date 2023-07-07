import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
import { useLocation } from "@reach/router";

const StyledContainer = styled(Grid)`
  padding: 160px 0 75px;
  h1 {
    margin-bottom: 20px;
    grid-column: 1/13;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 40px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      padding-bottom: 40px;
      grid-column: 1/9;
    }
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
        grid-column: 1 / span 8;
      }
      @media ${(props) => props.theme.minWidth.xl} {
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

const PageHero = ({ title, firstParagraph, secondParagraph, className }) => {
  const { pathname } = useLocation();

  return (
    <StyledContainer className={className} pathname={pathname}>
      <Title type="h1">{title}</Title>
      <Paragraph size="xxl">{firstParagraph}</Paragraph>
      <Paragraph size="lg">{secondParagraph}</Paragraph>
    </StyledContainer>
  );
};

export default PageHero;
