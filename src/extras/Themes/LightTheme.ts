import { createTheme, responsiveFontSizes } from "@mui/material";
const theme = {
  spacing: 4,
  typography: {
    fontFamily: ["Roboto", "Raleway", "Open Sans"].join(","),
    h1: {
      fontSize: "5rem",
      fontFamily: "Raleway",
    },
    h3: {
      fontSize: "2.5rem",
      fontFamily: "Open Sans",
    },
  },
  palette: {
    background: {
      default: "#009900", //green
    },
    primary: {
      main: "#009900", //green
    },
    secondary: {
      main: "#000000", //black
      primary: "#FEFEFF",
      error: "#FF0500"
    },
    text: {
      primary: "#000000", //black
      secondary: "#FFFFFF", //white
    },

  },
}
export const lightTheme = responsiveFontSizes(
  createTheme(theme)
);
