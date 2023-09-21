import React from "react";
import styled from "styled-components";

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100vh;
`;

const Consultation = () => {
  return (
    <StyledIframe
      title="consultation"
      src="https://tlmr-avocats.kneo.me/iframe/56902376c9bd6ea.html"
    ></StyledIframe>
  );
};

export default Consultation;
