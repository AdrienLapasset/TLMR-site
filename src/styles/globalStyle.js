import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`

@font-face {
  font-family: "Sohne-Buch";
  src: url("assets/fonts/Sohne/Sohne-Buch.otf") format("opentype");
}

* {
  margin: 0;
  padding: 0;
  font-family: "Sohne-Buch", sans-serif;
  list-style: none;
}

html {
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  display: block;
}
`;
