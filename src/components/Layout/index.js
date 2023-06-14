import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";
import Footer from "./Footer";

const StyledContainer = styled.div`
  padding: 0 15px;
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 0 24px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    padding: 0 32px;
  }
  @media ${(props) => props.theme.minWidth.xl} {
    padding: 0 45px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContainer className="pageAnimation">
          <Navigation />
          {children}
          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
