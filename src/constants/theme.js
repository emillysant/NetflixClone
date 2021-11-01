import { createTheme } from "@material-ui/core/styles";
import { primaryColor, neutralColor, secundaryColor } from "./colors";

const theme = createTheme({
  typography: {
    button: {
      fontSize: 12,
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    secondary: {
      main: secundaryColor,
      contrastText: "black",
    },
    text: {
      primary: neutralColor,
    },
  },
});

theme.typography.h3 = {
  fontSize: "1.5rem",
  fontWeight: "bold",

  "@media (min-width:600px)": {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
    fontWeight: "bold",
  },
};

export default theme;
