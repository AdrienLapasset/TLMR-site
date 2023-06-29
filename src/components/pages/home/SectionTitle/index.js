import * as React from "react";
import styled from "styled-components";
import Title from "components/global/Title";

const StyledContainer = styled.div`
  aside {
    font-size: 13px;
    font-family: "Söhne Buch", sans-serif;
    margin-bottom: ${({ aside }) => (aside === "Actualités" ? -3 : -5)}px;
    @media ${(props) => props.theme.minWidth.sm} {
      margin-bottom: ${({ aside }) => (aside === "Actualités" ? -5 : -8)}px;
      font-size: 14px;
    }
    @media ${(props) => props.theme.minWidth.xl} {
      margin-bottom: ${({ aside }) => (aside === "Actualités" ? 0 : -10)}px;
      font-size: 16px;
    }
  }
`;
const StyledTitle = styled(Title)`
  margin-bottom: 20px;
  @media ${(props) => props.theme.minWidth.sm} {
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    margin-bottom: 45px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin-bottom: 65px;
    font-size: 55px;
    line-height: 70px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    font-size: 60px;
    line-height: 70px;
  }
`;

const SectionTitle = ({ aside, title, className, small }) => {
  return (
    <StyledContainer aside={aside} className={className}>
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
