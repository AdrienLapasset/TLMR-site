import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import { Link } from "react-scroll";
import Dot from "components/global/Dot";
import { myContext } from "provider";

const StyledContainer = styled.section`
  display: none;
  @media ${(props) => props.theme.minWidth.lg} {
    transform: translateY(
      ${({ headerHeight, isHidden }) => isHidden && `-` + headerHeight * 2}px
    );
    transition: transform ${(props) => props.theme.transitionTime}s,
      top ${(props) => props.theme.transitionTime}s;
    ${(props) => props.theme.cubicBezier.base};
    position: sticky;
    top: ${({ headerHeight, isNavHidden }) =>
      isNavHidden ? -1 : headerHeight}px;
    z-index: 1;
    background-color: white;
    display: block;
    margin: 100px 0 70px;
    border-top: ${({ theme }) => theme.border.black};
    padding: 10px 0;
  }

  h3 {
    display: none;
    @media ${(props) => props.theme.minWidth.lg} {
      display: block;
      grid-column: 1 / span 4;
    }
  }
  a {
    &:nth-of-type(1) {
      grid-column: 1 / span 3;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 5 / span 2;
      }
    }
    &:nth-of-type(2) {
      grid-column: 4 / span 3;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 7 / span 2;
      }
    }
    &:nth-of-type(3) {
      grid-column: 7 / span 3;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 9 / span 2;
      }
    }
    &:nth-of-type(4) {
      grid-column: 10 / span 3;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 11 / span 2;
      }
    }
    &:nth-of-type(5) {
      grid-column: 1 / span 3;
      grid-row: 2;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 5 / span 2;
      }
    }
    &:nth-of-type(6) {
      grid-column: 4 / span 3;
      grid-row: 2;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 7 / span 2;
      }
    }
    &:nth-of-type(7) {
      grid-column: 7 / span 3;
      grid-row: 2;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 9 / span 2;
      }
    }
    &:nth-of-type(8) {
      grid-column: 10 / span 3;
      grid-row: 2;
      @media ${(props) => props.theme.minWidth.lg} {
        grid-column: 11 / span 2;
      }
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
`;

const AnchorNavBar = ({ data, eservices, twoPointsSectionRef }) => {
  const headerHeight = 71;
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollToAnchorNav, setIsScrollToAnchorNav] = useState(false);
  const anchorNavRef = useRef(null);

  useEffect(() => {
    const handleIsHidden = () => {
      const twoPointsSectionPosition =
        twoPointsSectionRef.current.getBoundingClientRect().top;
      twoPointsSectionPosition < 300 ? setIsHidden(true) : setIsHidden(false);
    };
    const handleIsScrollToAnchorNav = () => {
      const anchorNavPosition =
        anchorNavRef.current.getBoundingClientRect().top;
      anchorNavPosition <= 0
        ? setIsScrollToAnchorNav(true)
        : setIsScrollToAnchorNav(false);
    };
    window.addEventListener("scroll", handleIsHidden);
    window.addEventListener("scroll", handleIsScrollToAnchorNav);
    return () => {
      window.removeEventListener("scroll", handleIsHidden);
      window.removeEventListener("scroll", handleIsScrollToAnchorNav);
    };
  }, [twoPointsSectionRef]);
  return (
    <myContext.Consumer>
      {(context) => (
        <React.Fragment>
          <StyledContainer
            isNavHidden={context?.isNavHidden}
            headerHeight={headerHeight}
            isHidden={isHidden}
            isScrollToAnchorNav={isScrollToAnchorNav}
            ref={anchorNavRef}
          >
            <Grid>
              {!eservices && <h3>Compétences</h3>}
              {data.map(({ title }, index) => (
                <StyledNavLink
                  key={index}
                  offset={-200}
                  to={title}
                  activeClass="active"
                  smooth
                  spy
                >
                  <Dot square={eservices} />
                  {title}
                </StyledNavLink>
              ))}
            </Grid>
          </StyledContainer>
        </React.Fragment>
      )}
    </myContext.Consumer>
  );
};

export default AnchorNavBar;
