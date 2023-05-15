import { createGlobalStyle } from "styled-components/macro";
import SohneBuch from "assets/fonts/soehne-buch.woff2";
import SöhneBreitBuch from "assets/fonts/soehne-breit-buch.woff2";
import SöhneKräftig from "assets/fonts/soehne-kraftig.woff2";

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
  font-size: 14px;
  font-weight: 400;
  display: block;
  box-sizing: border-box;
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
  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
}
`;
