import React, { useEffect, useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import darkTheme from "./themes/dark";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import lightTheme from "./themes/light";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(prop) => prop.theme.backgrounds.main};
    color: ${(prop) => prop.theme.color};
    width: 100%;    
  }
`;

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
`;

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const theme = localStorage.getItem("theme");
    if (theme != null) return JSON.parse(theme) as DefaultTheme;

    return darkTheme;
  });

  return (
    <ThemeContext.Provider
      value={{
        setTheme: setTheme,
        value: theme,
      }}
    >
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Calculator />
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
