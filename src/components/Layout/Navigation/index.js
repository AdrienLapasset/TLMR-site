import React, { useState } from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  img {
    height: 40px;
  }
  div {
    display: flex;

    a {
      margin: 0 70px 0 0;
      font-size: 16px;
    }
  }
`;

const Navigation = ({ toggleModal }) => {
  const [isNavOpen, setNavOpen] = useState(true);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <StyledNav>
      <img src={TLMRlogo} alt="Logo TLMR" />
      <div isNavOpen={isNavOpen}>
        <Link to="/a-propos-de-nous" activeClassName="active">
          Expertises{" "}
        </Link>
        <Link to="/expertises" activeClassName="active">
          e-Services{" "}
        </Link>
        <Link to="/projets" activeClassName="active">
          Formations{" "}
        </Link>
        <Link to="/actus" activeClassName="active">
          Actualités{" "}
        </Link>
        <Link to="/actus" activeClassName="active">
          L’équipe{" "}
        </Link>
        <Link to="/actus" activeClassName="active">
          Contact{" "}
        </Link>
      </div>
    </StyledNav>
  );
};

export default Navigation;
