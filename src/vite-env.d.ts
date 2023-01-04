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
    };
    resultKey: {
      background: string;
      shadow: string;
      color: string;
    };
    resetKey: {
      background: string;
      shadow: string;
      color: string;
    };
    toggle: string;
    color: string;
  }
}
