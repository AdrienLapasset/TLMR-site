import React from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";

const StyledFooter = styled.footer`
  margin-top: 175px;
  border-top: ${(props) => props.theme.border.black};
  img {
    margin: 45px 0 170px;
  }
`;
const StyledLinksContainer = styled.div`
  @media ${(props) => props.theme.minWidth.sm} {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    color: ${(props) => props.theme.colors.greyLight};
  }
  & > div {
    @media ${(props) => props.theme.minWidth.sm} {
      display: flex;
    }
    &:last-child {
      @media ${(props) => props.theme.minWidth.sm} {
        width: 200px;
      }
      & > div {
        margin-right: 0;
      }
    }
    & > div {
      margin-bottom: 35px;
      @media ${(props) => props.theme.minWidth.sm} {
        margin-top: 0;
      }

      @media ${(props) => props.theme.minWidth.sm} {
        margin-right: 40px;
        @media ${(props) => props.theme.minWidth.md} {
          margin-right: 60px;
        }
        @media ${(props) => props.theme.minWidth.lg} {
          margin-right: 80px;
        }
      }
    }
  }
`;
const StyledCopyrightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  font-size: 13px;
  padding: 10px 0;
  & > div {
    @media ${(props) => props.theme.minWidth.sm} {
      width: 200px;
    }
    span {
      display: none;
      @media ${(props) => props.theme.minWidth.sm} {
        display: inline-block;
      }
    }
  }
`;

const Navigation = () => {
  const currentYear = new Date().getFullYear();

  const goToTop = () => {
    document.body.scrollIntoView();
  };

  return (
    <StyledFooter>
      <img src={TLMRlogo} alt="Logo TLMR" />
      <StyledLinksContainer>
        <div>
          <div>
            <h3>Le cabinet</h3>
            <Link to="/expertises">Expertises</Link>
            <Link to="/e-services">e-Services</Link>
            <Link to="/rse">Engagements RSE</Link>
          </div>
          <div>
            <h3>À propos</h3>
            <Link to="/l-equipe">Notre équipe</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Paiement</Link>
          </div>
          <div>
            <h3>Retrouvez-nous</h3>
            <Link to="/">LinkedIn</Link>
          </div>
        </div>
        <div>
          <div>
            <h3>Légal</h3>
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/mentions-legales#politique-de-confidentialite">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </StyledLinksContainer>
      <StyledCopyrightsContainer>
        <p>© Touati La Motte Rouge Avocats {currentYear}</p>
        <div>
          <button onClick={goToTop}>
            Retour <span>en haut</span> ↑
          </button>
        </div>
      </StyledCopyrightsContainer>
    </StyledFooter>
  );
};

export default Navigation;
