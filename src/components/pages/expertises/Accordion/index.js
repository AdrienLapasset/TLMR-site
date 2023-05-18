import * as React from "react";
import styled from "styled-components";
import Grid from "components/global/Grid";
import Title from "components/global/Title";

const StyledContainer = styled.div``;

const Accordion = ({ data }) => {
  const sectionsRender = data.map((section) => {
    return (
      <>
        {section.title} {section.content}
      </>
    );
  });

  return <StyledContainer>{sectionsRender}</StyledContainer>;
};

export default Accordion;
