import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Container from "components/Layout/Container";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Navigation />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
