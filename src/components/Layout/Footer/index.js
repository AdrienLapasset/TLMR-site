import React from "react";
import styled from "styled-components";
import TLMRlogo from "assets/logos/TLMR-logo.svg";
import { Link } from "gatsby";

const StyledFooter = styled.footer`
  margin-top: 160px;
  border-top: 0.5px solid ${(props) => props.theme.colors.black};
  img {
    margin-bottom: 170px;
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
      margin-top: 35px;
      @media ${(props) => props.theme.minWidth.sm} {
        margin-top: 0;
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

  return (
    <StyledFooter>
      <img src={TLMRlogo} alt="Logo TLMR" />
      <StyledLinksContainer>
        <div>
          <div>
            <h3>Le cabinet</h3>
            <Link>Expertise</Link>
            <Link>e-Services</Link>
            <Link>Engagements RSE</Link>
          </div>
          <div>
            <h3>À propos</h3>
            <Link>Notre équipe</Link>
            <Link>Contact</Link>
          </div>
          <div>
            <h3>Retrouvez-nous</h3>
            <Link>LinkedIn</Link>
          </div>
        </div>
        <div>
          <div>
            <h3>Légal</h3>
            <Link>Mentions légales</Link>
            <Link> Politique de confidentialité</Link>
          </div>
        </div>
      </StyledLinksContainer>
      <StyledCopyrightsContainer>
        <p>© Touati La Motte Rouge Avocats {currentYear}</p>
        <div>
          <button>
            Retour <span>en haut</span> ↑
          </button>
        </div>
      </StyledCopyrightsContainer>
    </StyledFooter>
  );
};

export default Navigation;
