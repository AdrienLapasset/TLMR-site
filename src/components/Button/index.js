import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledContainer = styled(Link)`
  text-decoration: underline;
`;

const Button = ({ text, className }) => {
  return <StyledContainer className={className}>{text}</StyledContainer>;
};

export default Button;
