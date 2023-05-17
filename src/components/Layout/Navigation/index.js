import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";
import ToggleBtn from "./ToggleBtn";

const StyledNav = styled.nav`
  transition: all 0.4s;
  height: ${(props) => (props.isNavOpen ? "100vh" : "54px")};
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 13px 0;
  @media ${(props) => props.theme.minWidth.sm} {
    height: ${(props) => (props.isNavOpen ? "100vh" : "70px")};
    padding: 21px 0;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    height: unset;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.lg};
    grid-template-areas: "logo logo . . . links links links links links links links";
    align-items: center;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.xl};
  }
  img {
    height: 28px;
  }
`;
const StyledLinksContainer = styled.div`
  opacity: ${(props) => (props.isNavOpen ? "1" : "0")};
  transition: all 0.4s;
  overflow: hidden;
  padding-top: ${(props) => (props.isNavOpen ? "50px" : "0")};
  visibility: ${(props) => (props.isNavOpen ? "visible" : "hidden")};
  @media ${(props) => props.theme.minWidth.lg} {
    grid-area: links;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.lg};
    opacity: 1;
    height: unset;
    visibility: visible;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    grid-column-gap: ${(props) => props.theme.columnGap.xl};
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
      border-top: 0.5px solid ${(props) => props.theme.colors.greyLightest};
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
const StyledDesktopLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 10px;
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
    <StyledNav isNavOpen={isNavOpen}>
      <StyledMobileLayout>
        <img src={TLMRlogo} alt="Logo TLMR" />
        <ToggleBtn onClick={toggleNav} isNavOpen={isNavOpen} />
      </StyledMobileLayout>
      <StyledLinksContainer isNavOpen={isNavOpen}>
        <Link to="/a-propos-de-nous" activeClassName="active">
          Expertises
        </Link>
        <Link to="/expertises" activeClassName="active">
          e-Services
        </Link>
        <Link to="/projets" activeClassName="active">
          Formations
        </Link>
        <Link to="/actus" activeClassName="active">
          Actualités
        </Link>
        <Link to="/actus" activeClassName="active">
          L’équipe
        </Link>
        <Link to="/actus" activeClassName="active">
          Contact
        </Link>
        <Link to="/actus" activeClassName="active">
          Paiement
        </Link>
      </StyledLinksContainer>
    </StyledNav>
  );
};

export default Navigation;
