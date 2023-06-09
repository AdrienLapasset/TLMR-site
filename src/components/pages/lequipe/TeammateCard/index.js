import React from "react";
import styled from "styled-components";
import Paragraph from "components/global/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import AccordionSection from "./AccordionSection";
import linkedinLogo from "assets/logos/linkedin.svg";

const StyledContainer = styled.div`
  margin-bottom: 80px;
  h3,
  aside {
    font-size: 22px;
    line-height: 26px;
    @media ${(props) => props.theme.minWidth.sm} {
      font-size: 25px;
      line-height: 30px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 30px;
      line-height: 34px;
    }
  }
  h3 {
    margin-top: 10px;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-top: 20px;
    }
  }
  aside {
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: 25px;
    @media ${(props) => props.theme.minWidth.md} {
      margin-bottom: 35px;
    }
  }
  p {
    margin-bottom: 30px;
  }
  a {
    margin-top: 10px;
    width: fit-content;
  }
`;

const TeammateCard = ({
  imgName,
  name,
  post,
  description,
  experiences,
  engagements,
  linkedinUrl,
}) => {
  const imgPathHenri = "../../../../assets/imgs/placeholder.jpg";
  const imgPathJean = "../../../../assets/imgs/placeholder.jpg";
  const imgPathElea = "../../../../assets/imgs/placeholder.jpg";
  const imgPathMyriam = "../../../../assets/imgs/placeholder.jpg";
  const imgPathCamille = "../../../../assets/imgs/placeholder.jpg";
  const imgPathEvanthia = "../../../../assets/imgs/placeholder.jpg";

  return (
    <StyledContainer>
      {imgName === "henri" && (
        <StaticImage src={imgPathHenri} alt={name} aspectRatio={1} />
      )}
      {imgName === "jean-philippe" && (
        <StaticImage src={imgPathJean} alt={name} aspectRatio={1} />
      )}
      {imgName === "elea" && (
        <StaticImage src={imgPathElea} alt={name} aspectRatio={1} />
      )}
      {imgName === "myriam" && (
        <StaticImage src={imgPathMyriam} alt={name} aspectRatio={1} />
      )}
      {imgName === "camille" && (
        <StaticImage src={imgPathCamille} alt={name} aspectRatio={1} />
      )}
      {imgName === "evanthia" && (
        <StaticImage src={imgPathEvanthia} alt={name} aspectRatio={1} />
      )}
      <h3>{name}</h3>
      <aside>{post}</aside>
      <Paragraph>{description}</Paragraph>
      <AccordionSection title="Formation et expérience" data={experiences} />
      <AccordionSection title="Engagements" data={engagements} />
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <img src={linkedinLogo} alt="" />
        </a>
      )}
    </StyledContainer>
  );
};

export default TeammateCard;
