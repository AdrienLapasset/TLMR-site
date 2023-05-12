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
  padding: 3px 0;
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 13px 0;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  img {
    height: 40px;
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
    display: flex;
    opacity: 1;
    flex-direction: row;
    height: unset;
    visibility: visible;
  }
  a {
    padding: 0 0 12px 0;
    margin: 12px 0 0;
    border-bottom: 0.5px solid ${(props) => props.theme.colors.greyLightest};
    width: 100%;
    @media ${(props) => props.theme.minWidth.lg} {
      margin: 0 70px 0 0;
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
`;

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <StyledNav>
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
