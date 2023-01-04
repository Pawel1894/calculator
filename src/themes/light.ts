import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  name: "lightTheme",
  backgrounds: {
    main: "hsl(0, 0%, 90%)",
    toggle: "hsl(0, 5%, 81%)",
    screen: "hsl(0, 0%, 93%)",
  },
  numKeys: {
    background: "hsl(45, 7%, 89%)",
    shadow: "hsl(35, 11%, 61%)",
    color: "hsl(60, 10%, 19%)",
    hover: "hsl(0, 0%, 97.6%)",
  },
  resultKey: {
    background: "hsl(25, 98%, 40%)",
    shadow: "hsl(25, 99%, 27%)",
    color: "hsl(0, 0%, 100%)",
    hover: "hsl(25, 86.3%, 51.4%)",
  },
  resetKey: {
    background: "hsl(185, 42%, 37%)",
    shadow: "hsl(185, 58%, 25%)",
    color: "hsl(0, 0%, 100%)",
    hover: "hsl(186, 32.8%, 47.8%)",
  },
  toggle: "hsl(25, 98%, 40%)",
  color: "hsl(60, 10%, 19%)",
};

export default lightTheme;
