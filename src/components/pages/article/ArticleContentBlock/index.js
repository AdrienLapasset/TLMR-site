import React from "react";
import styled from "styled-components";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "i7u835te",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

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
const StyledImg = styled.img`
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
    return <StyledImg src={builder.image(imgId).url()} />;
  }
};

export default ArticleContentBlock;
