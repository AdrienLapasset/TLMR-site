import { createGlobalStyle } from "styled-components/macro";
import SohneBuch from "assets/fonts/soehne-buch.woff2";
import SöhneBreitBuch from "assets/fonts/soehne-breit-buch.woff2";
import SöhneKräftig from "assets/fonts/soehne-kraftig.woff2";
import SignifierLight from "assets/fonts/signifier-light.woff2";
import SignifierLightItalic from "assets/fonts/signifier-light-italic.woff2";
import SignifierMedium from "assets/fonts/signifier-medium.woff2";

export default createGlobalStyle`

@font-face {
  font-family: "Söhne Buch";
  src: url(${SohneBuch}) format("woff2");
}
@font-face {
  font-family: "Söhne Kräftig";
  src: url(${SöhneKräftig}) format("woff2");
}
@font-face {
  font-family: "SöhneBreit Buch";
  src: url(${SöhneBreitBuch}) format("woff2");
}
@font-face {
  font-family: "Signifier Light";
  src: url(${SignifierLight}) format("woff2");
}
@font-face {
  font-family: "Signifier Light Italic";
  src: url(${SignifierLightItalic}) format("woff2");
}
@font-face {
  font-family: "Signifier Medium";
  src: url(${SignifierMedium}) format("woff2");
}

* {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
p,
a,
button,
div,
q,
input,
select,
textarea,
nav { 
  margin: 0;
  padding: 0;
  font-family: "Söhne Buch", sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: block;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  display: block;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
}

li {
  list-style: none;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
}

.pageAnimation {
  animation: pageAnimation 1s ${({ theme }) => theme.cubicBezier.base} forwards;
  opacity: 0;
}

@keyframes pageAnimation {
  100% {
    opacity: 1;
  }
}
`;
