import React, { useState, useRef } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import Paragraph from "components/global/Paragraph";

const StyledContainer = styled.section``;
const StyledHeader = styled.div`
  padding: 7px 0;
  @media ${(props) => props.theme.minWidth.md} {
    padding: 9px 0;
  }
  border-bottom: ${(props) => props.theme.border.greyLightest};
  display: flex;
  cursor: pointer;
  &:hover {
    & > h4 {
      color: ${(props) => props.theme.colors.grey};
    }
  }
`;
const StyledContent = styled.div`
  padding-bottom: ${(props) => (props.isSectionOpen ? "10px" : "0")};
  opacity: ${(props) => (props.isSectionOpen ? "1" : "0")};
  transition: all 400ms ${(props) => props.theme.cubicBezier.base};
  height: ${(props) =>
    props.isSectionOpen ? props.contentHeight + 20 + "px" : "0"};
  overflow-y: hidden;
  li {
    margin-top: 10px;
    display: flex;
  }
  span {
    flex: 0 0 14px;
  }
`;

const AccordionSection = ({ title, data, isOpen, openAccordionSection }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleSection = () => {
    setContentHeight(contentRef.current.scrollHeight);
    isOpen(title);
  };

  const isSectionOpen = openAccordionSection === title;

  return (
    <StyledContainer>
      <StyledHeader onClick={toggleSection}>
        <Paragraph as="h4">{title}</Paragraph>
        <ToggleBtn isSectionOpen={isSectionOpen} />
      </StyledHeader>
      <StyledContent
        isSectionOpen={isSectionOpen}
        contentHeight={contentHeight}
        ref={contentRef}
      >
        <ul>
          {data.map((item) => (
            <Paragraph key={item} size="sm" as="li">
              <span>→ </span>
              {item}
            </Paragraph>
          ))}
        </ul>
      </StyledContent>
    </StyledContainer>
  );
};

export default AccordionSection;
