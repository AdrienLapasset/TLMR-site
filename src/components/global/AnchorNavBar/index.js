import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import { Link } from "react-scroll";
import Dot from "components/global/Dot";

const StyledContainer = styled.section`
  display: none;
  @media ${(props) => props.theme.minWidth.lg} {
    transform: ${(props) =>
      props.isNavHidden
        ? "translateY(-" + props.headerHeight + "px)"
        : "translateY(0px)"};
    transition: transform ${(props) => props.theme.transitionTime};
    ${(props) => props.theme.cubicBezier.base};
    position: sticky;
    top: ${(props) => props.headerHeight + "px"};
    z-index: 1;
    background-color: white;
    display: block;
    margin: 100px 0 120px;
    border-top: ${(props) => props.theme.border.black};
    padding: 10px 0;
  }

  h3 {
    display: none;
    @media ${(props) => props.theme.minWidth.lg} {
      display: block;
      grid-column: 1 / span 4;
    }
  }
`;
const StyledNavLink = styled(Link)`
  text-align: left;
  display: flex;
  align-items: first baseline;
  color: ${(props) => props.theme.colors.greyLight};
  margin-bottom: 10px;
  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.black};
    & > div {
      background-color: ${(props) => props.theme.colors.black};
    }
  }
  & > div {
    flex: 0 0 10px;
    background-color: ${(props) => props.theme.colors.greyLight};
  }
  &:nth-child(2) {
    grid-column: 1 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 5 / span 2;
    }
    grid-row: 1;
  }
  &:nth-child(3) {
    grid-column: 4 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 7 / span 2;
    }
  }
  &:nth-child(4) {
    grid-column: 7 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 9 / span 2;
    }
  }
  &:nth-child(5) {
    grid-column: 10 / span 3;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 11 / span 2;
    }
  }
  &:nth-child(6) {
    grid-column: 1 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 5 / span 2;
    }
  }
  &:nth-child(7) {
    grid-column: 4 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 7 / span 2;
    }
  }
  &:nth-child(8) {
    grid-column: 7 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 9 / span 2;
    }
  }
  &:nth-child(9) {
    grid-column: 10 / span 3;
    grid-row: 2;
    @media ${(props) => props.theme.minWidth.lg} {
      grid-column: 11 / span 2;
    }
  }
`;

const AnchorNavBar = ({
  data,
  expertisesNavRef,
  isNavHidden,
  headerHeight,
}) => {
  return (
    <StyledContainer
      ref={expertisesNavRef}
      isNavHidden={isNavHidden}
      headerHeight={headerHeight}
    >
      <Grid>
        <h3>Compétences</h3>
        {data.map(({ title }, index) => (
          <StyledNavLink
            key={index}
            offset={-200}
            to={title}
            activeClass="active"
            smooth
            spy
          >
            <Dot />
            {title}
          </StyledNavLink>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default AnchorNavBar;
