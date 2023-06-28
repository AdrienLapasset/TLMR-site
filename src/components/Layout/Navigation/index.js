import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";
import ToggleBtn from "./ToggleBtn";
import { myContext } from "provider";

const StyledNav = styled.nav`
  overflow: hidden;
  transition: height ${(props) => props.theme.transitionTime}s,
    transform ${(props) => props.theme.transitionTime}s;
  height: ${({ isNavOpen }) => (isNavOpen ? "100vh" : "54px")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 13px 15px;
  transform: translateY(
    ${({ isNavHidden, theme }) =>
      isNavHidden ? -theme.headerHeightMobile : 0}px
  );
  @media ${(props) => props.theme.minWidth.sm} {
    height: ${(props) => (props.isNavOpen ? "100vh" : "70px")};
    padding: 21px 69px;
    margin-left: -45px;
    margin-right: -45px;
    transform: translateY(${({ isNavHidden }) => (isNavHidden ? -70 : 0)}px);
  }
  @media ${(props) => props.theme.minWidth.lg} {
    position: sticky;
    padding: 21px 45px;
    transform: translateY(
      ${({ isNavHidden, theme }) => (isNavHidden ? -theme.headerHeight : 0)}px
    );
    height: unset;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
    grid-template-areas: "logo logo . . . links links links links links links links";
    align-items: center;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  img {
    height: 24px;
    @media ${(props) => props.theme.minWidth.sm} {
      height: 28px;
    }
  }
`;
const StyledLinksContainer = styled.div`
  transition: opacity ${(props) => props.theme.transitionTime}s,
    padding-top ${(props) => props.theme.transitionTime}s;
  opacity: ${(props) => (props.isNavOpen ? "1" : "0")};
  padding-top: ${({ isNavOpen }) => (isNavOpen ? "35px" : "0")};
  @media ${(props) => props.theme.minWidth.lg} {
    grid-area: links;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
    opacity: 1;
    height: unset;
    visibility: visible;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.desktop};
  }
  a {
    padding: 12px 0;
    border-bottom: 0.8px solid ${(props) => props.theme.colors.greyLightest};
    width: 100%;
    font-size: 18px;
    position: relative;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-top: 0;
      font-size: 16px;
      border-bottom: none;
      padding: 0;
      width: fit-content;
    }
    &:first-child {
      border-top: 0.8px solid ${(props) => props.theme.colors.greyLightest};
      @media ${(props) => props.theme.minWidth.lg} {
        border-top: none;
      }
    }
    &:hover {
      @media ${(props) => props.theme.minWidth.lg} {
        color: ${(props) => props.theme.colors.greyLight};
        text-decoration: underline;
        text-underline-offset: 7px;
        text-decoration-thickness: 0.8px;
        /* &:after {
          content: "";
          display: block;
          height: 1px;
          width: 100%;
          background-color: ${(props) => props.theme.colors.greyLight};
          position: absolute;
          bottom: -1px;
          left: 0;
        } */
      }
    }
  }
`;
const StyledMobileLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: logo;
`;
const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <myContext.Consumer>
      {(context) => (
        <StyledNav isNavOpen={isNavOpen} isNavHidden={context?.isNavHidden}>
          <StyledMobileLayout>
            <Link to="/">
              <img src={TLMRlogo} alt="Logo TLMR" />
            </Link>
            <ToggleBtn onClick={toggleNav} isNavOpen={isNavOpen} />
          </StyledMobileLayout>
          <StyledLinksContainer
            className="linksContainer"
            isNavOpen={isNavOpen}
          >
            <Link to="/expertises">Expertises</Link>
            <Link to="/e-services">e-Services</Link>
            <Link to="/formations">Formations</Link>
            <Link to="/actualites">Actualités</Link>
            <Link to="/l-equipe">L’équipe</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/paiement">Paiement</Link>
          </StyledLinksContainer>
        </StyledNav>
      )}
    </myContext.Consumer>
  );
};

export default Navigation;
