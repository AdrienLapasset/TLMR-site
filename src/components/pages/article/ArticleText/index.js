import React from "react";

import styled from "styled-components";

const StyledP = styled.p`
  font-family: "Signifier Light";
  font-size: 18px;
  margin-bottom: 20px;
  &h2 {
    font-family: "Söhne Kräftig";
  }
`;
const StyledH2 = styled.h2`
  font-size: 18px;
  margin: 40px 0 20px;
  font-family: "Söhne Kräftig";
`;

const ArticleText = ({ children, style }) => {
  console.log(style);
  if (style === "normal") return <StyledP>{children}</StyledP>;
  if (style === "h2") return <StyledH2>{children}</StyledH2>;
};

export default ArticleText;
