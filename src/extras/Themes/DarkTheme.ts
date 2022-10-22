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
      default: "#000000", //black
    },
    primary: {
      main: "#FFFFFF", //white
    },
    secondary: {
      main: "#FFFFFF", //white
      error: "#FF0500",
      primary: "#FEFEFF",
    },
    text: {
      primary: "#FFFFFF", //white
      secondary: "#FFFFFF", //white
    },
  },
}
export const darkTheme = responsiveFontSizes(
  createTheme(theme)
);
