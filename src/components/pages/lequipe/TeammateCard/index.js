import React from "react";
import styled from "styled-components";
import Paragraph from "components/global/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import AccordionSection from "./AccordionSection";

const StyledContainer = styled.div`
  h3,
  aside {
    font-size: 22px;
  }
  h3 {
    margin-top: 10px;
  }
  aside {
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 40px;
  }
`;

const TeammateCard = ({
  imgName,
  name,
  post,
  description,
  experiences,
  engagements,
}) => {
  const imgPathHenri = "../../../../assets/imgs/placeholder.jpg";

  return (
    <StyledContainer>
      {imgName === "henri" && (
        <StaticImage src={imgPathHenri} alt={name} aspectRatio={1} />
      )}
      <h3>{name}</h3>
      <aside>{post}</aside>
      <Paragraph>{description}</Paragraph>
      <AccordionSection title="Formation et expérience" data={experiences} />
      <AccordionSection title="Engagements" data={engagements} />
    </StyledContainer>
  );
};

export default TeammateCard;
