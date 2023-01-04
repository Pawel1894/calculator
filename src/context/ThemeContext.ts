import React from "react";
import { DefaultTheme } from "styled-components";
import darkTheme from "../themes/dark";

type TContext = {
  setTheme: (theme: DefaultTheme) => void;
  value: undefined | DefaultTheme;
};

export const ThemeContext = React.createContext<TContext>({
  setTheme: (theme: DefaultTheme) => {},
  value: undefined,
});
