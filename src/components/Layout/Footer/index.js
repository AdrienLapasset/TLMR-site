import React from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";
import Paragraph from "components/global/Paragraph";
import { useLocation } from "@reach/router";

const StyledFooter = styled.footer`
  margin-top: 160px;
  border-top: ${(props) => props.theme.border.black};
  img {
    margin: 25px 0 60px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin: 25px 0 230px;
    }
    @media ${(props) => props.theme.minWidth.md} {
      margin: 25px 0 315px;
    }
    @media ${(props) => props.theme.minWidth.lg} {
      margin: 30px 0 340px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      margin: 45px 0 360px;
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
    font-size: 14px;
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 16px;
    }
  }
  a > p {
    font-size: 14px;
    &:hover {
      color: ${(props) => props.theme.colors.grey};
    }
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: 3px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      font-size: 16px;
    }
  }
  & > div {
    @media ${(props) => props.theme.minWidth.sm} {
      display: flex;
    }
    &:last-child {
      margin-bottom: 40px;
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
        margin-bottom: 30px;
        margin-right: 40px;
      }
      @media ${(props) => props.theme.minWidth.md} {
        margin-right: 60px;
      }
      @media ${(props) => props.theme.minWidth.lg} {
        margin-right: 80px;
      }
    }
  }
`;
const StyledCopyrightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 12px;
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 20px 0 20px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    padding: 20px 0 25px;
  }
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
  p,
  button {
    font-size: 13px;
    @media ${(props) => props.theme.minWidth.md} {
      font-size: 14px;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

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
            {/* <Link to="/paiement">
              <Paragraph>Paiement</Paragraph>
            </Link> */}
          </div>
          <div>
            <Paragraph as="h3">Retrouvez-nous</Paragraph>
            <a
              href="https://www.linkedin.com/company/touati-la-motte-rouge-avocats"
              target="_blank"
              rel="noreferrer"
            >
              <Paragraph>LinkedIn</Paragraph>
            </a>
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
          <Link to={pathname}>
            Retour <span>en haut</span> ↑
          </Link>
        </div>
      </StyledCopyrightsContainer>
    </StyledFooter>
  );
};

export default Footer;
