import React from "react";
import styled from "styled-components";

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin: auto;
  max-width: ${(props) => props.theme.layoutWidth.xs};
  padding: 0 15px;
  @media ${(props) => props.theme.minWidth.sm} {
    max-width: ${(props) => props.theme.layoutWidth.sm};
  }
  @media ${(props) => props.theme.minWidth.md} {
    max-width: ${(props) => props.theme.layoutWidth.md};
  }
  @media ${(props) => props.theme.minWidth.lg} {
    max-width: ${(props) => props.theme.layoutWidth.lg};
    padding: 0 45px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    max-width: ${(props) => props.theme.layoutWidth.xl};
  }
  @media ${(props) => props.theme.minWidth.xxl} {
    max-width: ${(props) => props.theme.layoutWidth.xxl};
  }
`;

export default Container;
