import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`

@font-face {
  font-family: "Sohne-Buch";
  src: url("assets/fonts/Sohne/Sohne-Buch.otf") format("opentype");
}
@font-face {
  font-family: "Söhne-Kräftig";
  src: url("assets/fonts/Sohne/Söhne-Kräftig.otf") format("opentype");
}

* {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3
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
  font-family: "Sohne-Buch", sans-serif;
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  display: block;
  box-sizing: border-box;
}

html {
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  display: block;
}
`;
