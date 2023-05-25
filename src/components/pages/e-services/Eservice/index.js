import React from "react";
import styled from "styled-components";
// import Title from "components/global/Title";
// import Grid from "components/global/Grid";
// import Accordion from "../Accordion";
// import Paragraph from "components/global/Paragraph";
// import Cta from "components/global/Cta";
// import Dot from "components/global/Dot";

const StyledContainer = styled.div``;

const Eservice = ({ eservice }) => {
  return <StyledContainer>{eservice.title}</StyledContainer>;
};

export default Eservice;
