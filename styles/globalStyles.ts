import { createGlobalStyle } from "styled-components";

export const FONT_SIZES = {
  xxl: "9.375rem",
  xl: "6.25rem",
  l: "3.5rem",
  m: "2rem",
  s: "1.75rem",
  xs: "1rem",
  xxs: "0.875rem",
  text: "1.125rem"
}

export const COLORS = {
  dark: "hsl(230, 35%, 7%)",
  light: "hsl(231, 77%, 90%)",
  white: "hsl(0, 0%, 100%)"
}

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: ${FONT_SIZES.text};
    background-color: ${COLORS.dark};
    color: ${COLORS.white};
  }
`