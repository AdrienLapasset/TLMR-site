const theme = {
  colors: {
    black: "#000000",
    blackLight: "#1E1E1E",
    grey: "#939393",
    greyLight: "#AAAAAA",
    greyLighter: "#FAFAFA",
    greyLightest: "#E4E4E4",
  },
  minWidth: {
    xs: `(min-width: 375px)`,
    sm: `(min-width: 768px)`,
    md: `(min-width: 1024px)`,
    lg: `(min-width: 1280px)`,
    xl: `(min-width: 1440px)`,
    xxl: `(min-width: 1728px)`,
  },
  cubicBezier: {
    base: "cubic-bezier(.25, .8, .25, 1)",
    bounce: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  },
  transitionTime: "0.3s",
  columnGap: {
    mobile: "20px",
    desktop: "30px",
  },
  border: {
    black: "0.5px solid #000000",
    greyLightest: "0.5px solid #E4E4E4",
  },
};

export default theme;
