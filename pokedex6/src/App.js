import Router from "./routes/Router"
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";

function App() {
  return (



    <ThemeProvider theme={theme}>

      <Router />
    </ThemeProvider>
  );
}


export default App;
