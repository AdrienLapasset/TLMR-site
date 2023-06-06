import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "components/global/Paragraph";
import { GatsbyImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  h3,
  aside {
    font-size: 22px;
  }
  aside {
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: 20px;
  }
`;

const TeammateCard = ({
  imgName,
  name,
  post,
  description,
  experience,
  engagements,
}) => {
  const imgPath = "../../../assets/imgs/" + imgName + ".jpeg";
  console.log(imgPath);

  return (
    <StyledContainer>
      <GatsbyImage src={imgPath} alt={name} />
      <h3>{name}</h3>
      <aside>{post}</aside>
      <Paragraph>{description}</Paragraph>
    </StyledContainer>
  );
};

export default TeammateCard;
