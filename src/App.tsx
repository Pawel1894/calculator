import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Calculator from "./components/Calculator";
import darkTheme from "./themes/dark";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
