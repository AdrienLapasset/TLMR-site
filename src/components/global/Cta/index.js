import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledContainer = styled(Link)`
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 16px;
  @media ${(props) => props.theme.minWidth.md} {
    font-size: 15px;
  }
`;

const Cta = ({ type, children, className }) => {
  return (
    <StyledContainer as={type} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Cta;