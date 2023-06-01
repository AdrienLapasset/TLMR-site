import { createGlobalStyle } from "styled-components/macro";
import styled from "styled-components";
import SohneBuch from "assets/fonts/soehne-buch.woff2";
import SöhneBreitBuch from "assets/fonts/soehne-breit-buch.woff2";
import SöhneKräftig from "assets/fonts/soehne-kraftig.woff2";

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
`;

export const Styled2PointsSection = styled.section`
  border-top: ${(props) => props.theme.border.black};
  margin-top: 300px;
  .grid {
    display: block;
    @media ${(props) => props.theme.minWidth.md} {
      display: grid;
    }
    & > div {
      grid-column: 1 / span 6;
      &:last-child {
        grid-column: 7 / span 6;
        border-top: ${(props) => props.theme.border.black};
        @media ${(props) => props.theme.minWidth.sm} {
          border-top: none;
        }
      }
      h2 {
        margin: 20px 0 50px;
      }
      & > div {
        margin-bottom: 90px;
        @media ${(props) => props.theme.minWidth.sm} {
          column-count: 2;
          margin-bottom: 0;
        }
        @media ${(props) => props.theme.minWidth.sm} {
          grid-column-gap: ${(props) => props.theme.columnGap.mobile};
        }
        @media ${(props) => props.theme.minWidth.xl} {
          grid-column-gap: ${(props) => props.theme.columnGap.desktop};
        }
        a {
          margin-top: 10px;
        }
      }
    }
  }
`;
