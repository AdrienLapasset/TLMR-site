import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";
import Button from "components/Button";

const StyledContainer = styled.div`
  margin-top: 160px;
  & > header {
    display: flex;
    padding-bottom: 25px;
    & > a {
      margin-left: auto;
      align-self: flex-end;
      display: none;
      @media ${(props) => props.theme.minWidth.sm} {
        display: block;
      }
    }
  }
  a.mobile {
    display: block;
    margin-top: 30px;
    @media ${(props) => props.theme.minWidth.sm} {
      display: none;
    }
  }
`;
const StyledColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 20px;
  @media ${(props) => props.theme.minWidth.sm} {
    column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.minWidth.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const StyledNews = styled.div`
  aside {
    font-size: 12px;
    margin: 6px 0;
    @media ${(props) => props.theme.minWidth.lg} {
      margin: 12px 0;
      font-size: 14px;
    }
  }
  h3 {
    font-size: 16px;
    @media ${(props) => props.theme.minWidth.lg} {
      font-size: 18px;
    }
  }
`;

const ALaUne = () => {
  return (
    <StyledContainer>
      <header>
        <SectionTitle aside={"Actualités"} title={"À LA UNE"} />
        <Button text="Toutes les actualités" />
      </header>
      <StyledColumns>
        <StyledNews>
          <StaticImage
            src="../../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
          />
          <aside>10 Octobre 2023</aside>
          <h3>Refus de vente : licite ou non ?</h3>
        </StyledNews>
        <StyledNews>
          <StaticImage
            src="../../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
          />
          <aside>10 Octobre 2023</aside>
          <h3>
            Cadeaux, vente à prime : ce que vous pouvez faire ou ne pas faire ?
          </h3>
        </StyledNews>
        <StyledNews>
          <StaticImage
            src="../../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
          />
          <aside>10 Octobre 2023</aside>
          <h3>
            Comment mettre en place un MLM licite ? Nos conseils juridiques
          </h3>
        </StyledNews>
        <StyledNews>
          <StaticImage
            src="../../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
          />
          <aside>10 Octobre 2023</aside>
          <h3>
            Comment mettre en place un MLM licite ? Nos conseils juridiques
          </h3>
        </StyledNews>
      </StyledColumns>
      <Button className="mobile" text="Toutes les actualités" />
    </StyledContainer>
  );
};

export default ALaUne;
