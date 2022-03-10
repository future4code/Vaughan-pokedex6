import { createTheme } from "@material-ui/core/styles";
import { primarycolor, secondarycolor, rock, ghost, electric,
 bug, poison, normal, fairy,
fire, grass, water  } from "./colors";


export const selectcolor = water

const theme = createTheme(
  {
  palette: {
    primary: {
      main: primarycolor,
      contrastText: "white",
    },
    secondary: {
      main: secondarycolor,
    },
    typecolor:{
      main: selectcolor,
    },
  },

});

export default theme;