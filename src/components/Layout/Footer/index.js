import React from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";
import Paragraph from "components/global/Paragraph";

const StyledFooter = styled.footer`
  margin-top: 175px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-top: 210px;
  }
  border-top: ${(props) => props.theme.border.black};
  img {
    margin: 25px 0 170px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin: 25px 0 260px;
    }
    @media ${(props) => props.theme.minWidth.md} {
      margin: 25px 0 315px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      margin: 30px 0 340px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      margin: 45px 0 370px;
    }
  }
`;
const StyledLinksContainer = styled.div`
  @media ${(props) => props.theme.minWidth.sm} {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    color: ${(props) => props.theme.colors.greyLight};
    margin-bottom: 7px;
  }
  a > p {
    margin-bottom: 3px;
    &:hover {
      color: ${(props) => props.theme.colors.grey};
    }
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
  font-size: 13px;
  padding: 50px 0 20px;
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
            <Paragraph as="h3">Le cabinet</Paragraph>
            <Link to="/expertises">
              <Paragraph>Expertises</Paragraph>
            </Link>
            <Link to="/e-services">
              <Paragraph>e-Services</Paragraph>
            </Link>
            <Link to="/rse">
              <Paragraph>Engagements RSE</Paragraph>
            </Link>
          </div>
          <div>
            <Paragraph as="h3">À propos</Paragraph>
            <Link to="/l-equipe">
              <Paragraph>Notre équipe</Paragraph>
            </Link>
            <Link to="/contact">
              <Paragraph>Contact</Paragraph>
            </Link>
            <Link to="/">
              <Paragraph>Paiement</Paragraph>
            </Link>
          </div>
          <div>
            <Paragraph as="h3">Retrouvez-nous</Paragraph>
            <Link to="/">
              <Paragraph>LinkedIn</Paragraph>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Paragraph as="h3">Légal</Paragraph>
            <Link to="/mentions-legales">
              <Paragraph>Mentions légales</Paragraph>
            </Link>
            <Link to="/mentions-legales#politique-de-confidentialite">
              <Paragraph>Politique de confidentialité</Paragraph>
            </Link>
            <Link to="/mentions-legales#cookies">
              <Paragraph>Cookies</Paragraph>
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
