import React from "react";
import styled from "styled-components";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import Paragraph from "components/global/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import Cta from "components/global/Cta";

const StyledContainer = styled.section`
  border-top: ${(props) => props.theme.border.black};
  margin-top: 200px;
  padding-top: 10px;
  @media ${(props) => props.theme.minWidth.md} {
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
        grid-column: 7 / span 6;
        border-top: ${(props) => props.theme.border.black};
        margin-top: 70px;
        @media ${(props) => props.theme.minWidth.md} {
          margin-top: 0px;
          border-top: none;
        }
        h2 {
          padding-top: 10px;
          @media ${(props) => props.theme.minWidth.md} {
            padding-top: 0px;
          }
        }
      }
      h2 {
        margin-bottom: 40px;
        @media ${(props) => props.theme.minWidth.md} {
          margin-bottom: 45px;
        }
      }
      & > div {
        margin-bottom: 90px;
        @media ${(props) => props.theme.minWidth.sm} {
          column-count: 2;
          margin-bottom: 0;
        }
        @media ${(props) => props.theme.minWidth.sm} {
          grid-column-gap: ${(props) => props.theme.columnGap.mobile};
        }
        @media ${(props) => props.theme.minWidth.xl} {
          grid-column-gap: ${(props) => props.theme.columnGap.desktop};
        }
        a {
          margin-top: 10px;
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
}) => {
  return (
    <StyledContainer ref={twoPointsSectionRef}>
      <Grid className="grid">
        <div>
          <Title size="sm" type="h2">
            {title1}
          </Title>
          <div>
            <StaticImage
              src="../../../assets/imgs/placeholder.jpg"
              alt="TLMR - L’excellence accessible"
            />
            <Paragraph>{description1}</Paragraph>
            <Cta to={"/" + link1}>En savoir plus</Cta>
          </div>
        </div>
        <div>
          <Title size="sm" type="h2">
            {title2}
          </Title>
          <div>
            <StaticImage
              src="../../../assets/imgs/placeholder.jpg"
              alt="TLMR - L’excellence accessible"
            />
            <Paragraph>{description2}</Paragraph>
            <Cta to={"/" + link2}>En savoir plus</Cta>
          </div>
        </div>
      </Grid>
    </StyledContainer>
  );
};

export default TwoPointsSection;
