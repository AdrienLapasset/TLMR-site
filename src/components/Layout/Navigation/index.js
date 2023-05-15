import React, { useState } from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";
import ToggleBtn from "./ToggleBtn";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 13px 0;
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 21px 0;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.lg};
    grid-template-areas: "logo logo . . . links links links links links links links";
    align-items: center;
    flex-direction: row;
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
  height: ${(props) => (props.isNavOpen ? "100vh" : "0px")};
  transition: all 0.4s;
  overflow: hidden;
  padding: ${(props) => (props.isNavOpen ? "10px 0 22px" : "0")};
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
    padding: 0 0 12px 0;
    margin-top: 12px;
    border-bottom: 0.5px solid ${(props) => props.theme.colors.greyLightest};
    width: 100%;
    @media ${(props) => props.theme.minWidth.lg} {
      margin-top: 0;
      font-size: 16px;
      border-bottom: none;
      padding: 0;
      width: unset;
    }
  }
`;
const StyledMobileLayout = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: logo;
`;
const StyledDesktopLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 10px;
`;

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <StyledNav>
      {/* <StyledDesktopLayout>
        <img src={TLMRlogo} alt="Logo TLMR" />
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
      </StyledDesktopLayout> */}

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
