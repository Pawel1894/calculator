import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  name: "darkTheme",
  backgrounds: {
    main: "hsl(222, 26%, 31%)",
    toggle: "hsl(223, 31%, 20%)",
    screen: "hsl(224, 36%, 15%)",
  },
  numKeys: {
    background: "hsl(225, 21%, 49%)",
    shadow: "hsl(224, 28%, 35%)",
    color: "hsl(221, 14%, 31%)",
  },
  resultKey: {
    background: "hsl(6, 63%, 50%)",
    shadow: "hsl(6, 70%, 34%)",
    color: "hsl(0, 0%, 100%)",
  },
  resetKey: {
    background: "hsl(30, 25%, 89%)",
    shadow: "hsl(28, 16%, 65%)",
    color: "hsl(0, 0%, 100%)",
  },
  toggle: "hsl(6, 63%, 50%)",
  color: "hsl(0, 0%, 100%)",
};

export default darkTheme;
