import React from "react";
import styled from "styled-components";
import SanityImg from "gatsby-plugin-sanity-image";

const StyledP = styled.p`
  font-family: "Signifier Light";
  font-size: 18px;
  margin-bottom: 30px;
  font-style: ${({ italic }) => (italic === "em" ? "italic" : "normal")};
`;
const StyledH2 = styled.h2`
  font-size: 18px;
  margin: 55px 0 30px;
  font-family: "Söhne Kräftig";
`;
const StyledLi = styled.li`
  font-size: 18px;
  font-family: "Signifier Light";
  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const StyledImg = styled(SanityImg)`
  max-width: 100%;
`;

const ArticleContentBlock = ({
  children,
  style,
  italic,
  listItem,
  type,
  imgId,
}) => {
  if (listItem !== "bullet") {
    if (style === "normal")
      return <StyledP italic={italic}>{children}</StyledP>;
    if (style === "h2") return <StyledH2>{children}</StyledH2>;
  } else {
    return <StyledLi>- {children}</StyledLi>;
  }
  if (type === "image") {
    return <StyledImg asset={imgId} alt={imgId.filename} />;
  }
};

export default ArticleContentBlock;
