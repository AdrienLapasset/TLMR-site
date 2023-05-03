import { createGlobalStyle } from "styled-components/macro";
import SohneBuch from "assets/fonts/Sohne/Sohne-Buch.otf";
import SöhneBreitBuch from "assets/fonts/Sohne/SöhneBreit-Buch.otf";
import SöhneKräftig from "assets/fonts/Sohne/Söhne-Kräftig.otf";

export default createGlobalStyle`

@font-face {
  font-family: "Söhne Buch";
  src: url(${SohneBuch}) format("opentype");
}
@font-face {
  font-family: "Söhne Kräftig";
  src: url(${SöhneKräftig}) format("opentype");
}
@font-face {
  font-family: "SöhneBreit Buch";
  src: url(${SöhneBreitBuch}) format("opentype");
}

* {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
p,
a,
button,
div,
q,
input,
select,
textarea { 
  margin: 0;
  padding: 0;
  font-family: "Söhne Buch", sans-serif;
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  display: block;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  display: block;
  cursor: pointer;
}

li {
  list-style: none;
}
`;
