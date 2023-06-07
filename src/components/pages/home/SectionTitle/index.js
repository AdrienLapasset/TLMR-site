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
const StyledTitle = styled(Title)`
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: 60px;
  }
`;

const SectionTitle = ({ aside, title, small, className }) => {
  return (
    <StyledContainer className={className}>
      <aside>{aside}</aside>
      <StyledTitle as="h2" small={small} className={className}>
        {title}
      </StyledTitle>
    </StyledContainer>
  );
};

export default SectionTitle;
