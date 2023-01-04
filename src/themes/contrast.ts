import { DefaultTheme } from "styled-components";

const highContrastTheme: DefaultTheme = {
  name: "contrastTheme",
  backgrounds: {
    main: "hsl(268, 75%, 9%)",
    toggle: "hsl(268, 71%, 12%)",
    screen: "hsl(268, 71%, 12%)",
  },
  numKeys: {
    background: "hsl(268, 47%, 21%)",
    shadow: "hsl(285, 91%, 52%)",
    color: "hsl(52, 100%, 62%)",
    hover: "hsl(268.1, 60.4%, 41.6%)",
  },
  resultKey: {
    background: "hsl(176, 100%, 44%)",
    shadow: "hsl(177, 92%, 70%)",
    color: "hsl(198, 20%, 13%)",
    hover: "hsl(175.8, 94.7%, 55.5%)",
  },
  resetKey: {
    background: "hsl(281, 89%, 26%)",
    shadow: "hsl(290, 70%, 36%)",
    color: "hsl(0, 0%, 100%)",
    hover: "hsl(268.1, 60.4%, 41.6%)",
  },
  toggle: "hsl(176, 100%, 44%)",
  color: "hsl(52, 100%, 62%)",
};

export default highContrastTheme;
