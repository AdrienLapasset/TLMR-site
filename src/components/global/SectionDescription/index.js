import * as React from "react";
import styled from "styled-components";
import Cta from "components/global/Cta";
import Grid from "components/global/Grid";

const StyledContainer = styled.div`
  p {
    font-size: 18px;
    font-family: "Söhne Buch", sans-serif;
    margin-bottom: 30px;
    grid-column: 1/13;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 20px;
    }
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: ${({ column }) => !column && "1/8"};
      font-size: 22px;
      margin-top: ${({ column }) => column && -8}px;
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

const SectionDescription = ({ description, links, className, column }) => {
  return (
    <StyledContainer className={className} column={column}>
      <Grid>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </Grid>
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
