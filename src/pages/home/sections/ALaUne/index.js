import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../SectionTitle";

const StyledContainer = styled.div`
  margin-top: 160px;
`;
const StyledColumns = styled.div`
  column-count: 4;
  column-gap: 30px;
`;
const StyledNews = styled.div`
  aside {
    font-size: 14px;
    margin: 12px 0;
  }
  h3 {
    font-size: 20px;
  }
`;

const ALaUne = () => {
  return (
    <StyledContainer>
      <SectionTitle aside={"Actualités"} title={"À LA UNE"} />
      <StyledColumns>
        <StyledNews>
          <StaticImage
            src="../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
            quality="90"
            aspectRatio={1}
          />
          <aside>10 Octobre 2023</aside>
          <h3>Refus de vente : licite ou non ?</h3>
        </StyledNews>
        <StyledNews>
          <StaticImage
            src="../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
            quality="90"
            aspectRatio={1}
          />
          <aside>10 Octobre 2023</aside>
          <h3>Refus de vente : licite ou non ?</h3>
        </StyledNews>
        <StyledNews>
          <StaticImage
            src="../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
            quality="90"
            aspectRatio={1}
          />
          <aside>10 Octobre 2023</aside>
          <h3>Refus de vente : licite ou non ?</h3>
        </StyledNews>
        <StyledNews>
          <StaticImage
            src="../../../assets/imgs/placeholder.jpg"
            alt="TLMR - L’excellence accessible"
            loading="eager"
            quality="90"
            aspectRatio={1}
          />
          <aside>10 Octobre 2023</aside>
          <h3>Refus de vente : licite ou non ?</h3>
        </StyledNews>
      </StyledColumns>
    </StyledContainer>
  );
};

export default ALaUne;
