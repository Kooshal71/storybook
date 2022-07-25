export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// .storybook/preview.js
import React from "react";
import { addDecorator } from "@storybook/react";
// import Center from "../src/components/Center/Center";
import { ChakraProvider, Box, theme, CSSReset } from "@chakra-ui/react";
addDecorator((story) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box display="flex" justifyContent="center">
      {story()}
    </Box>
  </ChakraProvider>
));
