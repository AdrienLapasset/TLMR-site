import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import Accordion from "../Accordion";
import Paragraph from "components/global/Paragraph";
import Cta from "components/global/Cta";
import Dot from "components/global/Dot";

const StyledContainer = styled.div`
  margin-top: 150px;
  border-top: ${(props) => props.theme.border.black};
  padding-top: 7px;
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 130px;
  }
`;
const StyledPoint = styled.aside`
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: 60px;
  }
  & > span {
    margin-left: 10px;
  }
`;
const StyledParagraph = styled(Paragraph)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const StyledAccordionContainer = styled.div`
  margin-top: 40px;
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
        border-top: ${(props) => props.theme.border.black};
        padding-top: 7px;
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
    padding-top: 7px;
    border-top: ${(props) => props.theme.border.black};
    @media ${(props) => props.theme.minWidth.sm} {
      column-count: 2;
    }
    & > div {
      display: flex;
      margin-bottom: 10px;
      @media ${(props) => props.theme.minWidth.sm} {
        margin-bottom: 15px;
      }
      & > aside {
        margin-right: 7px;
      }
    }
  }
  button {
    margin-left: 17px;
    @media ${(props) => props.theme.minWidth.sm} {
      display: none;
    }
  }
`;
const StyledAdditionalSection = styled(Grid)`
  border-top: ${(props) => props.theme.border.black};
  padding-top: 7px;
  grid-column: 1 / span 12;
  display: grid;
  margin-top: 70px;

  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 100px;
  }
  aside {
    margin-bottom: 25px;
    @media ${(props) => props.theme.minWidth.sm} {
      grid-column: 1 / span 6;
    }
  }
  p {
    margin-bottom: 20px;
    @media ${(props) => props.theme.minWidth.sm} {
      grid-column: 7 / span 6;
    }
  }
`;

const Expertise = ({ expertise, id }) => {
  const [useCases, setUseCases] = useState(expertise.useCases);
  const [isSeeMoreUseCases, setIsSeeMoreUseCases] = useState(false);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth < 768) {
      isSeeMoreUseCases
        ? setUseCases(expertise.useCases)
        : setUseCases(useCases.slice(0, 5));
    } else {
      setUseCases(expertise.useCases);
    }
  }, [isSeeMoreUseCases]);

  const handleSeeMoreUseCases = () => {
    setIsSeeMoreUseCases(!isSeeMoreUseCases);
  };

  return (
    <StyledContainer id={"expertise" + id}>
      <StyledTitleGrid>
        <Title as="h2" small lowercase>
          {expertise.title}
        </Title>
      </StyledTitleGrid>
      <StyledPoint>
        <Dot />
        <Paragraph size="sm">
          Leaders League & Le Point&nbsp;
          <Paragraph size="sm" as="span" color="greyLight">
            Le cabinet est classé parmis les meilleurs
            <br /> cabinets français pour son expertise
          </Paragraph>
        </Paragraph>
      </StyledPoint>
      <StyledContentGrid>
        <div>
          {expertise.description.map((paragraph) => (
            <StyledParagraph
              html={{ __html: paragraph }}
              size="xl"
            ></StyledParagraph>
          ))}
        </div>
        <StyledAccordionContainer>
          {expertise.accordion.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </StyledAccordionContainer>
        <StyledUseCases>
          <h3>Exemples de cas traités</h3>
          <ul isSeeMoreUseCases={isSeeMoreUseCases}>
            {useCases.map((content) => (
              <div>
                <aside>→</aside>
                <Paragraph color="greyLight" as="li">
                  {content}
                </Paragraph>
              </div>
            ))}
          </ul>
          <Cta as="button" onClick={handleSeeMoreUseCases}>
            Voir plus
          </Cta>
        </StyledUseCases>
        {expertise.additionalSection && (
          <StyledAdditionalSection>
            <StyledPoint>
              <Dot />
              <Paragraph size="md" as="h3">
                {expertise.additionalSection.title}
              </Paragraph>
            </StyledPoint>
            {expertise.additionalSection.description.map((paragraph) => (
              <Paragraph size="md">{paragraph}</Paragraph>
            ))}
          </StyledAdditionalSection>
        )}
      </StyledContentGrid>
    </StyledContainer>
  );
};

export default Expertise;
