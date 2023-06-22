import * as React from "react";
import styled from "styled-components";
import SectionTitle from "../../SectionTitle";
import affiches from "assets/logos/dansLaPresse/affiches.svg";
import bfm from "assets/logos/dansLaPresse/bfm.svg";
import doctrine from "assets/logos/dansLaPresse/doctrine.svg";
import dsih from "assets/logos/dansLaPresse/dsih.svg";
import leaders from "assets/logos/dansLaPresse/leaders.svg";
import lefebvre from "assets/logos/dansLaPresse/lefebvre.svg";
import legalis from "assets/logos/dansLaPresse/legalis.svg";
import lepoint from "assets/logos/dansLaPresse/lepoint.svg";
import lexbase from "assets/logos/dansLaPresse/lexbase.svg";
import lja from "assets/logos/dansLaPresse/lja.svg";
import obs from "assets/logos/dansLaPresse/obs.svg";
import village from "assets/logos/dansLaPresse/village.svg";

const StyledContainer = styled.div`
  margin-top: 160px;
  h2 {
    margin-bottom: 70px;
  }
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  img {
    max-width: 100%;
  }
  @media ${(props) => props.theme.minWidth.sm} {
    grid-template-columns: repeat(6, 1fr);
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
  },
  {
    name: obs,
    alt: "L'Obs",
  },
  {
    name: village,
    alt: "Village de la Justice",
  },
];

const DansLaPresse = () => {
  const logosRender = logosList.map((logo, index) => {
    return <img key={index} src={logo.name} alt={logo.alt} />;
  });

  return (
    <StyledContainer>
      <SectionTitle title={"DANS LA PRESSE"} small />
      <StyledGrid>{logosRender}</StyledGrid>
    </StyledContainer>
  );
};

export default DansLaPresse;
