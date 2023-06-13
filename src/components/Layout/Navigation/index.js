import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import ToggleBtn from "./ToggleBtn";
import { myContext } from "provider";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const StyledNav = styled.nav`
  transition: all ${(props) => props.theme.transitionTime}s;
  ${(props) => props.theme.cubicBezier.base};
  height: ${(props) => (props.isNavOpen ? "100vh" : "54px")};
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 13px 0;
  transform: ${(props) =>
    props.isNavHidden ? "translateY(-54px)" : "translateY(0px)"};
  @media ${(props) => props.theme.minWidth.sm} {
    height: ${(props) => (props.isNavOpen ? "100vh" : "70px")};
    padding: 21px 0;
    margin-left: -45px;
    margin-right: -45px;
    padding-left: 45px;
    padding-right: 45px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    transform: ${(props) =>
      props.isNavHidden ? "translateY(-74px)" : "translateY(0px)"};
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
    height: 28px;
  }
`;
const StyledLinksContainer = styled.div`
  opacity: ${(props) => (props.isNavOpen ? "1" : "0")};
  transition: all ${(props) => props.theme.transitionTime}s;
  overflow: hidden;
  padding-top: ${(props) => (props.isNavOpen ? "50px" : "0")};
  visibility: ${(props) => (props.isNavOpen ? "visible" : "hidden")};
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
    padding: 15px 0;
    border-bottom: 0.5px solid ${(props) => props.theme.colors.greyLightest};
    width: 100%;
    font-size: 18px;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-top: 0;
      font-size: 15px;
      border-bottom: none;
      padding: 0;
      width: unset;
    }
    &:first-child {
      border-top: ${(props) => props.theme.border.greyLightest};
      @media ${(props) => props.theme.minWidth.lg} {
        border-top: none;
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
        <React.Fragment>
          <StyledNav isNavOpen={isNavOpen} isNavHidden={context?.isNavHidden}>
            <StyledMobileLayout>
              <AniLink fade duration={1} nk to="/">
                <img src={TLMRlogo} alt="Logo TLMR" />
              </AniLink>
              <ToggleBtn onClick={toggleNav} isNavOpen={isNavOpen} />
            </StyledMobileLayout>
            <StyledLinksContainer isNavOpen={isNavOpen}>
              <AniLink fade duration={1} to="/expertises">
                Expertises
              </AniLink>
              <AniLink fade duration={1} to="/e-services">
                e-Services
              </AniLink>
              <AniLink fade duration={1} to="/formations">
                Formations
              </AniLink>
              <AniLink fade duration={1} to="/actualites">
                Actualités
              </AniLink>
              <AniLink fade duration={1} to="/l-equipe">
                L’équipe
              </AniLink>
              <AniLink fade duration={1} to="/contact">
                Contact
              </AniLink>
              <AniLink fade duration={1} to="/paiement">
                Paiement
              </AniLink>
            </StyledLinksContainer>
          </StyledNav>
        </React.Fragment>
      )}
    </myContext.Consumer>
  );
};

export default Navigation;
