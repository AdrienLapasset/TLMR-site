import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";

const StyledHeader = styled.div`
  padding: 7px 0;
  border-bottom: ${(props) => props.theme.border.greyLightest};
  display: flex;
  cursor: pointer;
`;

const Accordion = ({ title, content }) => {
  const [isSectionOpen, setSectionOpen] = useState(false);

  const toggleSection = () => {
    setSectionOpen(!isSectionOpen);
  };

  return (
    <>
      <StyledHeader onClick={toggleSection}>
        {title}
        <ToggleBtn isSectionOpen={isSectionOpen} />
      </StyledHeader>
      {isSectionOpen && <p>{content}</p>}
    </>
  );
};

export default Accordion;
