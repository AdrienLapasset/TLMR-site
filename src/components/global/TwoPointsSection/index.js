import React from "react";
import styled from "styled-components";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import Paragraph from "components/global/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import Cta from "components/global/Cta";
import infolawersVideoMobile from "assets/videos/TLMR__info__03.mp4";
import infolawersVideoDesktop from "assets/videos/TLMR__info__01.mp4";

const StyledContainer = styled.section`
  border-top: ${(props) => props.theme.border.black};
  padding-top: 10px;
  margin-top: 70px;
  @media ${(props) => props.theme.minWidth.sm} {
    padding-top: 15px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    margin-top: 200px;
    padding-top: 15px;
  }
  .grid {
    display: block;
    @media ${(props) => props.theme.minWidth.md} {
      display: grid;
    }
    & > div {
      grid-column: 1 / span 6;
      &:last-child {
        padding-top: 10px;
        grid-column: 7 / span 6;
        border-top: ${(props) => props.theme.border.black};
        margin-top: 70px;
        @media ${(props) => props.theme.minWidth.sm} {
          padding-top: 15px;
        }
        @media ${(props) => props.theme.minWidth.md} {
          margin-top: 0px;
          padding-top: 0;
          border-top: none;
        }
      }
      h2 {
        margin-bottom: 20px;
        font-size: 32px;
        @media ${(props) => props.theme.minWidth.sm} {
          font-size: 35px;
          margin-bottom: 40px;
        }
        @media ${(props) => props.theme.minWidth.md} {
          margin-bottom: 45px;
        }
        @media ${(props) => props.theme.minWidth.lg} {
          font-size: 40px;
        }
        @media ${(props) => props.theme.minWidth.xl} {
          font-size: 45px;
        }
      }
      & > div {
        margin-bottom: 90px;
        @media ${(props) => props.theme.minWidth.sm} {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-bottom: 0;
        }
        @media ${(props) => props.theme.minWidth.sm} {
          grid-column-gap: ${(props) => props.theme.columnGap.mobile};
        }
        @media ${(props) => props.theme.minWidth.xl} {
          grid-column-gap: ${(props) => props.theme.columnGap.desktop};
        }
        .gatsby-image-wrapper {
          aspect-ratio: 1.5;
          @media ${(props) => props.theme.minWidth.sm} {
            aspect-ratio: 1.12;
          }
        }
        video {
          max-width: 100%;
          &.video-mobile {
            @media ${(props) => props.theme.minWidth.sm} {
              display: none;
            }
          }
          &.video-desktop {
            display: none;
            @media ${(props) => props.theme.minWidth.sm} {
              display: block;
            }
          }
        }
        p {
          margin-top: 7px;
          @media ${(props) => props.theme.minWidth.sm} {
            margin-top: 0px;
            transform: translateY(-5px);
          }
          @media ${(props) => props.theme.minWidth.md} {
            font-size: 15px;
          }
          @media ${(props) => props.theme.minWidth.lg} {
            font-size: 16px;
          }
        }
        a {
          margin-top: 10px;
          @media ${(props) => props.theme.minWidth.sm} {
            transform: translateY(-5px);
          }
        }
      }
    }
  }
`;

const TwoPointsSection = ({
  title1,
  title2,
  description1,
  description2,
  twoPointsSectionRef,
  link1,
  link2,
  style,
  className,
}) => {
  return (
    <StyledContainer
      style={style}
      className={className}
      ref={twoPointsSectionRef}
    >
      <Grid className="grid">
        <div>
          <Title size="sm" type="h2">
            {title1}
          </Title>
          <div>
            {title1 === "NOS SOLUTIONS" ? (
              <StaticImage
                src="../../../assets/imgs/SEE MORE BAS DE PAGES/solutions.jpeg"
                alt="TLMR - L’excellence accessible"
              />
            ) : title1 === "VOUS PROTÉGER" ? (
              <StaticImage
                src="../../../assets/imgs/SEE MORE BAS DE PAGES/proteger.jpg"
                alt="TLMR - L’excellence accessible"
                objectPosition="50% 20%"
              />
            ) : null}
            <div>
              <Paragraph>{description1}</Paragraph>
              <Cta to={"/" + link1}>En savoir plus</Cta>
            </div>
          </div>
        </div>
        <div>
          <Title size="sm" type="h2">
            {title2}
          </Title>
          <div>
            {title2 === "NOS SOLUTIONS" ? (
              <StaticImage
                src="../../../assets/imgs/SEE MORE BAS DE PAGES/solutions.jpeg"
                alt="TLMR - L’excellence accessible"
              />
            ) : title2 === "VOUS FORMER" ? (
              <div>
                <video className="video-mobile" autoPlay muted loop playsInline>
                  <source src={infolawersVideoMobile} type="video/mp4" />
                </video>
                <video
                  className="video-desktop"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={infolawersVideoDesktop} type="video/mp4" />
                </video>
              </div>
            ) : null}
            <div>
              <Paragraph>{description2}</Paragraph>
              <Cta to={"/" + link2}>En savoir plus</Cta>
            </div>
          </div>
        </div>
      </Grid>
    </StyledContainer>
  );
};

export default TwoPointsSection;
