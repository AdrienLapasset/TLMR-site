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
    margin-bottom: 50px;
  }
`;

const SectionTitle = ({ aside, title, className, small }) => {
  return (
    <StyledContainer className={className}>
      <aside>{aside}</aside>
      {small ? (
        <StyledTitle type="h2" className={className} size="sm">
          {title}
        </StyledTitle>
      ) : (
        <StyledTitle type="h2" className={className}>
          {title}
        </StyledTitle>
      )}
    </StyledContainer>
  );
};

export default SectionTitle;
