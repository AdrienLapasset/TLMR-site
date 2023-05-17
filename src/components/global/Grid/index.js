import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media ${(props) => props.theme.minWidth.sm} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.lg};
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.xl};
  }
`;

const Grid = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Grid;
