import React, { useState, useRef } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import Paragraph from "components/global/Paragraph";

const StyledContainer = styled.section`
  &:last-child {
    border-bottom: ${(props) => props.theme.border.black};
  }
`;
const StyledHeader = styled.div`
  padding: 9px 0;
  border-top: ${(props) => props.theme.border.black};
  display: flex;
  cursor: pointer;
`;
const StyledContent = styled.div`
  padding-bottom: ${(props) => (props.isSectionOpen ? "10px" : "0")};
  opacity: ${(props) => (props.isSectionOpen ? "1" : "0")};
  transition: all 400ms ${(props) => props.theme.cubicBezier.base};
  height: ${(props) =>
    props.isSectionOpen ? props.contentHeight + 20 + "px" : "0"};
  overflow-y: hidden;
`;

const Accordion = ({ title, content }) => {
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
        <Paragraph as="h3">{title}</Paragraph>
        <ToggleBtn isSectionOpen={isSectionOpen} />
      </StyledHeader>
      <StyledContent
        isSectionOpen={isSectionOpen}
        contentHeight={contentHeight}
        ref={contentRef}
      >
        <Paragraph color={"greyLight"}>{content}</Paragraph>
      </StyledContent>
    </StyledContainer>
  );
};

export default Accordion;
