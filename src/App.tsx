import React from "react";
import "./App.css";
import { DemoPage } from "./layout/DemoPage";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <DemoPage />
    </ThemeProvider>
  );
}

export default App;
