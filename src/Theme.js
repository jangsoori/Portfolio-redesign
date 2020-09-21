import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#3E5C88",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
