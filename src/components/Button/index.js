import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledContainer = styled(Link)`
  text-decoration: underline;
`;

const Button = ({ title }) => {
  return <StyledContainer>{title}</StyledContainer>;
};

export default Button;
