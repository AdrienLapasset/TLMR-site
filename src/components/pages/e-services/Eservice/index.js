import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";
import Paragraph from "components/global/Paragraph";

const StyledContainer = styled(Grid)`
  padding-bottom: 90px;
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
      @media ${(props) => props.theme.minWidth.md} {
        margin-top: 0px;
      }
    }
    & > p {
      margin-top: 35px;
    }
    & > ol {
      margin-top: 55px;
      li {
        display: flex;
        padding-top: 8px;
        border-top: ${(props) => props.theme.border.black};
        margin-bottom: 10px;
        & > p {
          font-size: 15px;
        }
        & > aside {
          font-family: "SöhneBreit Buch", sans-serif;
          font-size: 50px;
          margin-right: 30px;
          position: relative;
          top: -15px;
          flex: 0 0 50px;
          @media ${(props) => props.theme.minWidth.sm} {
            flex: 0 0 200px;
          }
          @media ${(props) => props.theme.minWidth.md} {
            flex: 0 0 80px;
            font-size: 60px;
            top: -15px;
          }
        }
      }
    }
    div {
      & > a,
      button {
        width: 100%;
        border-radius: 100px;
        padding: 5px 15px 6px;
        text-align: left;
        font-size: 14px;
        &:nth-child(1) {
          background-color: ${(props) => props.theme.colors.blackLight};
          color: white;
          margin: 35px 0 10px;
          @media ${(props) => props.theme.minWidth.md} {
            margin: 60px 0 10px;
          }
          &:hover {
            background-color: ${(props) => props.theme.colors.grey};
          }
        }
        &:nth-child(2) {
          background-color: ${(props) => props.theme.colors.greyLightest};
          &:hover {
            color: white;
            background-color: ${(props) => props.theme.colors.grey};
          }
        }
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

const Eservice = ({
  title,
  description,
  points,
  btns,
  handleDeepBlockModal,
  handleSeraphinLegalModal,
}) => {
  return (
    <>
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
            <Paragraph key={paragraph} html={{ __html: paragraph }}></Paragraph>
          ))}
          <ol>
            {points?.map((point, index) => (
              <li key={point}>
                <aside>{index + 1}</aside>
                <Paragraph>{point}</Paragraph>
              </li>
            ))}
          </ol>
          <div>
            {btns?.map((btn) =>
              btn.deepBlock ? (
                <button key={btn.name} onClick={() => handleDeepBlockModal()}>
                  {btn.name}
                </button>
              ) : btn.seraphinLegal ? (
                <button
                  key={btn.name}
                  onClick={() => handleSeraphinLegalModal()}
                >
                  {btn.name}
                </button>
              ) : btn.externlink ? (
                <a
                  href={btn.link}
                  key={btn.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {btn.name}
                </a>
              ) : (
                <Link to={btn.link} key={btn.name}>
                  {btn.name}
                </Link>
              )
            )}
          </div>
          {title === "Protection des créations" && (
            <aside>
              Service fourni par Deep Block™, opérateur de Blockchain Légale.
            </aside>
          )}
          {title === "Signature électronique" && (
            <aside className="vitalsign">
              Vitalsign est une Solution de la Societé DeepBlock, LegalTech
              française qui vous garantit un haut niveau de confidentialité.
            </aside>
          )}
        </div>
      </StyledContainer>
    </>
  );
};

export default Eservice;
