import React from "react";
import { DefaultTheme } from "styled-components";

export const ThemeContext = React.createContext((theme: DefaultTheme) => {});
