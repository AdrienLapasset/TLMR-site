import React from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const StyledFooter = styled.footer`
  margin-top: 160px;
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
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <img src={TLMRlogo} alt="Logo TLMR" />
      <StyledLinksContainer>
        <div>
          <div>
            <h3>Le cabinet</h3>
            <AniLink fade duration={1} to="/expertises">
              Expertises
            </AniLink>
            <AniLink fade duration={1} to="/expertises">
              e-Services
            </AniLink>
            <AniLink fade duration={1} to="/expertises">
              Engagements RSE
            </AniLink>
          </div>
          <div>
            <h3>À propos</h3>
            <AniLink fade duration={1} to="/expertises">
              Notre équipe
            </AniLink>
            <AniLink fade duration={1} to="/expertises">
              Contact
            </AniLink>
            <AniLink fade duration={1} to="/expertises">
              Paiement
            </AniLink>
          </div>
          <div>
            <h3>Retrouvez-nous</h3>
            <AniLink fade duration={1} to="/expertises">
              LinkedIn
            </AniLink>
          </div>
        </div>
        <div>
          <div>
            <h3>Légal</h3>
            <AniLink fade duration={1} to="/expertises">
              Mentions légales
            </AniLink>
            <AniLink fade duration={1} to="/expertises">
              {" "}
              Politique de confidentialité
            </AniLink>
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
