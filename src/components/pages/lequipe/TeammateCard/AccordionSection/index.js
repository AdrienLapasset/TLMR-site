import React, { useState, useRef } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import Paragraph from "components/global/Paragraph";

const StyledContainer = styled.section``;
const StyledHeader = styled.div`
  padding: 7px 0;
  border-bottom: ${(props) => props.theme.border.greyLightest};
  display: flex;
  cursor: pointer;
`;
const StyledContent = styled.div`
  padding-bottom: ${(props) => (props.isSectionOpen ? "10px" : "0")};
  padding-left: 10px;
  padding-right: 10px;
  opacity: ${(props) => (props.isSectionOpen ? "1" : "0")};
  transition: all 400ms ${(props) => props.theme.cubicBezier.base};
  height: ${(props) =>
    props.isSectionOpen ? props.contentHeight + 20 + "px" : "0"};
  overflow-y: hidden;
  li {
    margin-top: 10px;
  }
`;

const AccordionSection = ({ title, data }) => {
  const [isSectionOpen, setSectionOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleSection = () => {
    setContentHeight(contentRef.current.scrollHeight);
    setSectionOpen(!isSectionOpen);
  };

  return (
    <StyledContainer>
      <StyledHeader onClick={toggleSection}>
        <Paragraph size="lg" as="h4">
          {title}
        </Paragraph>
        <ToggleBtn isSectionOpen={isSectionOpen} />
      </StyledHeader>
      <StyledContent
        isSectionOpen={isSectionOpen}
        contentHeight={contentHeight}
        ref={contentRef}
      >
        <ul>
          {data.map((item) => (
            <Paragraph size="lg" as="li">
              → {item}
            </Paragraph>
          ))}
        </ul>
      </StyledContent>
    </StyledContainer>
  );
};

export default AccordionSection;
