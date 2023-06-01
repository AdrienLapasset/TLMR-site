import React from "react";
import styled from "styled-components";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import Paragraph from "components/global/Paragraph";
import { StaticImage } from "gatsby-plugin-image";
import Cta from "components/global/Cta";

const StyledContainer = styled.section`
  border-top: ${(props) => props.theme.border.black};
  margin-top: 100px;
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
        @media ${(props) => props.theme.minWidth.sm} {
          border-top: none;
        }
      }
      h2 {
        margin: 20px 0 50px;
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

const TwoPointsSection = ({ title1, title2, description1, description2 }) => {
  return (
    <StyledContainer>
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
            <Cta>En savoir plus</Cta>
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
            <Cta>En savoir plus</Cta>
          </div>
        </div>
      </Grid>
    </StyledContainer>
  );
};

export default TwoPointsSection;
