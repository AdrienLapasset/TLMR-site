import React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import { StaticImage } from "gatsby-plugin-image";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";
// import Cta from "components/global/Cta";
// import Dot from "components/global/Dot";

const StyledContainer = styled(Grid)`
  padding-top: 15px;
  border-top: ${(props) => props.theme.border.black};
  padding-bottom: 150px;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 35px;
  }
  & > .gatsby-image-wrapper {
    grid-column: 1 / span 6;
  }
  & > div {
    grid-column: 8 / span 6;
    h2 {
      margin-top: 10px;
    }
    & > p {
      margin-top: 30px;
    }
    & > ol {
      margin-top: 30px;
      li {
        display: flex;
        padding-top: 15px;
        border-top: ${(props) => props.theme.border.black};
        margin-bottom: 10px;
        & > aside {
          font-family: "SöhneBreit Buch", sans-serif;
          font-size: 50px;
          margin-right: 30px;
          position: relative;
          top: -10px;
          flex: 0 0 40px;
        }
      }
    }
    & > a {
      border-radius: 100px;
      padding: 5px 15px;
      &:first-of-type {
        background-color: ${(props) => props.theme.colors.blackLight};
        color: white;
        margin: 30px 0 10px;
      }
      &:last-of-type {
        background-color: ${(props) => props.theme.colors.greyLightest};
      }
    }
    & > aside {
      margin-top: 50px;
      font-size: 12px;
      padding: 5px 0;
      border-top: ${(props) => props.theme.border.greyLightest};
      border-bottom: ${(props) => props.theme.border.greyLightest};
    }
  }
`;

const Eservice = ({ title, description, points, btn, imgPath }) => {
  return (
    <StyledContainer>
      <StaticImage
        src="../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        quality="90"
        aspectRatio={1.12}
      />
      <div>
        <Title size="xs" type="h2">
          {title}
        </Title>
        {description.map((paragraph) => (
          <Paragraph
            key={paragraph}
            html={{ __html: paragraph }}
            size="xl"
          ></Paragraph>
        ))}
        <ol>
          {points?.map((point, index) => (
            <li key={point}>
              <aside>{index + 1}</aside>
              <p>{point}</p>
            </li>
          ))}
        </ol>
        {btn?.map((btn) => (
          <a href={btn.link} key={btn.name}>
            {btn.name}
          </a>
        ))}
        {title === "Protection des créations" && (
          <aside>
            Service fourni par Deep Block™, opérateur de Blockchain Légale.
          </aside>
        )}
      </div>
    </StyledContainer>
  );
};

export default Eservice;
