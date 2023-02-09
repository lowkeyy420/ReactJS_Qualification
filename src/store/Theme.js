import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    },
  },
  config: {
    disableTransitionOnChange: false,
  },
};

const theme = extendTheme(config);

export default theme;
