import * as React from "react";
import styled from "styled-components";
import SectionTitle from "../../SectionTitle";
import affiches from "assets/logos/dansLaPresse/affiches.svg";
import bfm from "assets/logos/dansLaPresse/bfm.svg";
import doctrine from "assets/logos/dansLaPresse/doctrine.svg";
import dsih from "assets/logos/dansLaPresse/dsih.svg";
import leaders from "assets/logos/dansLaPresse/leaders.png";
import lefebvre from "assets/logos/dansLaPresse/lefebvre.png";
import legalis from "assets/logos/dansLaPresse/legalis.svg";
import lepoint from "assets/logos/dansLaPresse/lepoint.svg";
import lexbase from "assets/logos/dansLaPresse/lexbase.svg";
import lja from "assets/logos/dansLaPresse/lja.svg";
import obs from "assets/logos/dansLaPresse/obs.svg";
import village from "assets/logos/dansLaPresse/village.png";

const StyledContainer = styled.div`
  margin-top: 110px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 160px;
  }
  h2 {
    margin-bottom: 40px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 70px;
    }
  }
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  @media ${(props) => props.theme.minWidth.sm} {
    grid-template-columns: repeat(6, 1fr);
  }
`;
const StyledImg = styled.img`
  max-width: 100%;
  display: ${({ isHiddenMobile }) => isHiddenMobile && "none"};
  @media ${(props) => props.theme.minWidth.sm} {
    display: block;
  }
`;

const logosList = [
  {
    name: affiches,
    alt: "Affiches Parisiennes",
  },
  {
    name: bfm,
    alt: "BFM TV",
  },
  {
    name: doctrine,
    alt: "Doctrine.fr",
  },
  {
    name: dsih,
    alt: "DSIH",
  },
  {
    name: leaders,
    alt: "Leaders League",
  },
  {
    name: lefebvre,
    alt: "Editions Francis Lefebvre",
  },
  {
    name: legalis,
    alt: "Legalis",
  },
  {
    name: lepoint,
    alt: "Le Point",
  },
  {
    name: lexbase,
    alt: "Lexbase",
  },
  {
    name: lja,
    alt: "LJA",
    isHiddenMobile: true,
  },
  {
    name: obs,
    alt: "L'Obs",
    isHiddenMobile: true,
  },
  {
    name: village,
    alt: "Village de la Justice",
    isHiddenMobile: true,
  },
];

const DansLaPresse = () => {
  const logosRender = logosList.map((logo, index) => {
    return (
      <StyledImg
        key={index}
        src={logo.name}
        alt={logo.alt}
        isHiddenMobile={logo.isHiddenMobile}
      />
    );
  });

  return (
    <StyledContainer>
      <SectionTitle title={"DANS LA PRESSE"} small />
      <StyledGrid>{logosRender}</StyledGrid>
    </StyledContainer>
  );
};

export default DansLaPresse;
