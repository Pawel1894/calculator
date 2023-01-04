/// <reference types="vite/client" />
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "darkTheme" | "lightTheme" | "contrastTheme";
    backgrounds: {
      main: string;
      toggle: string;
      screen: string;
    };
    numKeys: {
      background: string;
      shadow: string;
      color: string;
      hover: string;
    };
    resultKey: {
      background: string;
      shadow: string;
      color: string;
      hover: string;
    };
    resetKey: {
      background: string;
      shadow: string;
      color: string;
      hover: string;
    };
    toggle: string;
    color: string;
  }
}
