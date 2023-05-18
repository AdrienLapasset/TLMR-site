import * as React from "react";
import styled from "styled-components";
import Title from "components/global/Title";

const StyledContainer = styled.div`
  aside {
    font-size: 13px;
    font-family: "Söhne Buch", sans-serif;
    margin-bottom: -5px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: -8px;
      font-size: 14px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      margin-bottom: -10px;
      font-size: 16px;
    }
  }
`;

const SectionTitle = ({ aside, title, small, className }) => {
  return (
    <StyledContainer className={className}>
      <aside>{aside}</aside>
      <Title type={"h2"} small={small}>
        {title}
      </Title>
    </StyledContainer>
  );
};

export default SectionTitle;
