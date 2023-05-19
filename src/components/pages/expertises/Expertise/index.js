import * as React from "react";
import styled from "styled-components";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import Accordion from "../Accordion";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";

const StyledContainer = styled.div`
  margin-top: 150px;
  border-top: ${(props) => props.theme.border.black};
  padding-top: 5px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 130px;
  }
  & > aside {
    margin-bottom: 40px;
    & > span {
      margin-left: 10px;
    }
  }
`;
const StyledDot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 100px;
  margin-right: 7px;
`;
const StyledParagrph = styled(Paragraph)`
  border-top: ${(props) => props.theme.border.black};
  padding-top: 5px;
`;
const StyledAccordionContainer = styled.div`
  margin-top: 40px;
  border-top: ${(props) => props.theme.border.black};
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 0;
  }
`;
const StyledTitleGrid = styled(Grid)`
  & > * {
    grid-column: 1 / 13;
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 1 / 9;
    }
  }
`;
const StyledContentGrid = styled(Grid)`
  display: block;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
    grid-template-rows: repeat(2, auto);
    & > * {
      &:nth-child(1) {
        grid-column: 1 / 7;
      }
      &:nth-child(2) {
        grid-column: 7 / 13;
        grid-row: 1 / span 2;
      }
      &:nth-child(3) {
        align-self: start;
        grid-column: 1 / 7;
      }
    }
  }
`;
const StyledUseCases = styled.div`
  margin-top: 40px;
  & > h3 {
    margin-bottom: 10px;
  }
  & > ul {
    padding-top: 5px;
    border-top: ${(props) => props.theme.border.black};
    @media ${(props) => props.theme.minWidth.sm} {
      column-count: 2;
    }
    & > div {
      display: flex;
      margin-bottom: 10px;
      & > aside {
        margin-right: 7px;
      }
    }
  }
  button {
    @media ${(props) => props.theme.minWidth.sm} {
      display: none;
    }
  }
`;

const Expertise = ({ expertise }) => {
  return (
    <StyledContainer>
      <StyledTitleGrid>
        <Title type="h2" small lowercase>
          {expertise.title}
        </Title>
      </StyledTitleGrid>
      <aside>
        <p className="small">
          <StyledDot />
          Leaders League & Le Point
          <span className="greyLight">
            Le cabinet est classé parmis les meilleurs
            <br /> cabinets français pour son expertise
          </span>
        </p>
      </aside>
      <StyledContentGrid>
        <StyledParagrph html={{ __html: expertise.description }} />
        <StyledAccordionContainer>
          {expertise.accordion.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </StyledAccordionContainer>
        <StyledUseCases>
          <h3>Exemples de cas traités</h3>
          <ul>
            {expertise.useCases.map((content) => (
              <div>
                <aside>→</aside>
                <Paragraph color="greyLight" type="li">
                  {content}
                </Paragraph>
              </div>
            ))}
          </ul>
          <Cta type="button">Voir plus</Cta>
        </StyledUseCases>
      </StyledContentGrid>
    </StyledContainer>
  );
};

export default Expertise;
