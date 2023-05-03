import React from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";

const StyledNav = styled.nav`
  display: flex;
  padding: 30px 0;
  img {
    height: 26px;
  }
`;

const Navigation = () => {
  return (
    <>
      <StyledNav>
        <img src={TLMRlogo} alt="Logo TLMR" />
      </StyledNav>
    </>
  );
};

export default Navigation;
