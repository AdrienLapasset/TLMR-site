import React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import { StaticImage } from "gatsby-plugin-image";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";

const StyledContainer = styled(Grid)`
  padding-top: 15px;
  border-top: ${(props) => props.theme.border.black};
  @media ${(props) => props.theme.minWidth.sm} {
    padding-top: 20px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 35px;
  }
  & > .gatsby-image-wrapper {
    max-height: 600px;
    grid-column: 1 / span 12;
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 1 / span 6;
    }
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 1 / span 7;
    }
  }
  & > div {
    grid-column: 1 / span 12;
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 8 / span 6;
    }
    @media ${(props) => props.theme.minWidth.md} {
      grid-column: 9 / span 5;
    }
    h2 {
      margin-top: 10px;
      @media ${(props) => props.theme.minWidth.sm} {
        margin-top: 20px;
      }
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
          @media ${(props) => props.theme.minWidth.sm} {
            flex: 0 0 200px;
          }
          @media ${(props) => props.theme.minWidth.sm} {
            flex: 0 0 80px;
          }
        }
      }
    }
    & > a {
      border-radius: 100px;
      padding: 5px 15px;
      &:nth-of-type(1) {
        background-color: ${(props) => props.theme.colors.blackLight};
        color: white;
        margin: 30px 0 10px;
        @media ${(props) => props.theme.minWidth.md} {
          margin: 60px 0 10px;
        }
      }
      &:nth-of-type(2) {
        background-color: ${(props) => props.theme.colors.greyLightest};
      }
    }
    & > aside {
      margin-top: 50px;
      font-size: 12px;
      padding: 5px 0;
      border-top: ${(props) => props.theme.border.greyLightest};
      border-bottom: ${(props) => props.theme.border.greyLightest};
      &.vitalsign {
        display: flex;
        align-items: center;
        & > div {
          margin-right: 10px;
        }
      }
    }
  }
`;

const Eservice = ({ title, description, points, btns, imgPath }) => {
  return (
    <StyledContainer>
      <StaticImage
        src="../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        quality="90"
        aspectRatio={1.12}
      />
      <div>
        <Title size="xs" as="h2">
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
              <Paragraph>{point}</Paragraph>
            </li>
          ))}
        </ol>
        {btns?.map((btn) => (
          <a href={btn.link} key={btn.name}>
            {btn.name}
          </a>
        ))}
        {title === "Protection des créations" && (
          <aside>
            Service fourni par Deep Block™, opérateur de Blockchain Légale.
          </aside>
        )}
        {title === "Signature électronique" && (
          <aside className="vitalsign">
            <div>
              <StaticImage
                src="../../../../assets/logos/logo_vitalsign.png"
                alt="Logo Vitalsign"
                quality="90"
                layout="fixed"
                width={70}
              />
            </div>
            Vitalsign est une Solution de la Societé DeepBlock, LegalTech
            française qui vous garantit un haut niveau de confidentialité.
          </aside>
        )}
      </div>
    </StyledContainer>
  );
};

export default Eservice;
