import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  //   palette: {
  //     primary: {
  //       light: "#C0C0C0",
  //       main: "#1A202C",
  //       dark: "#232323",
  //     },
  //     secondary: {
  //       light: "#EFEFEF",
  //       main: "#ffffff",
  //       dark: "#898989",
  //     },
  //   },
  typography: {
    h1: {
      fontWeight: "regular",
      font: "Playfair Display",
      fontSize: "1vw",
      fontFamily: "Playfair Display",
      lineHeight: "2vw",
    },
    h2: {
      fontWeight: 600,
      fontSize: "3vw",
      fontFamily: "Cormorant,serif",
    },
    h3: {
      fontWeight: 500,
      fontSize: "2.5vw",
      fontFamily: "Cormorant,serif",
    },
    body1: {
      fontWeight: "lighter",
      font: "Josefin Sans",
      fontSize: "1.5vw",
      fontFamily: "Josefin Sans",
      lineHeight: "2vw",
    },
    body2: {
      fontWeight: "lighter",
      font: "Josefin Sans",
      fontSize: "1vw",
      fontFamily: "Josefin Sans",
      lineHeight: "2vw",
    },
  },

  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

export default theme;
