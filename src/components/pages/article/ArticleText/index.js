import React from "react";

import styled from "styled-components";

const StyledP = styled.p`
  font-family: "Signifier Light";
  font-size: 18px;
  margin-bottom: 20px;
  font-style: ${({ italic }) => (italic === "em" ? "italic" : "normal")};
`;
const StyledH2 = styled.h2`
  font-size: 18px;
  margin: 40px 0 20px;
  font-family: "Söhne Kräftig";
`;
const StyledLi = styled.li`
  font-size: 18px;
  font-family: "Signifier Light";
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const ArticleText = ({ children, style, italic, listItem }) => {
  if (listItem !== "bullet") {
    if (style === "normal")
      return <StyledP italic={italic}>{children}</StyledP>;
    if (style === "h2") return <StyledH2>{children}</StyledH2>;
  } else {
    return <StyledLi>- {children}</StyledLi>;
  }
};

export default ArticleText;
