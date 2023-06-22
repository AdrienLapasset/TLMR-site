import * as React from "react";
import styled from "styled-components";
import Cta from "components/global/Cta";

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
  return (
    <StyledContainer className={className}>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <StyledButtonsContainer>
        {links.map(({ text, to, extern }) =>
          extern ? (
            <Cta key={text} href={to}>
              {text}
            </Cta>
          ) : (
            <Cta key={text} to={to}>
              {text}
            </Cta>
          )
        )}
      </StyledButtonsContainer>
    </StyledContainer>
  );
};

export default SectionDescription;
