import React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import { StaticImage } from "gatsby-plugin-image";
import Title from "components/global/Title";
// import Accordion from "../Accordion";
// import Paragraph from "components/global/Paragraph";
// import Cta from "components/global/Cta";
// import Dot from "components/global/Dot";

const StyledContainer = styled(Grid)`
  padding-top: 35px;
  border-top: ${(props) => props.theme.border.black};
  padding-bottom: 150px;
  & > .gatsby-image-wrapper {
    grid-column: 1 / span 6;
  }
  & > div {
    grid-column: 8 / span 6;
  }
`;

const Eservice = ({ eservice }) => {
  return (
    <StyledContainer>
      <StaticImage
        src="../../../../assets/imgs/placeholder.jpg"
        alt="TLMR - L’excellence accessible"
        quality="90"
        aspectRatio={1.12}
      />
      <div>
        <Title size="sm">{eservice.title}</Title>
      </div>
    </StyledContainer>
  );
};

export default Eservice;
