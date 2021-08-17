import { Theme } from "@emotion/react";

const themeConfig: Theme = {
  colors: {
    brand: "#00B2FF",
    light: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.85)",
      additional: "rgba(255, 255, 255, 0.65)",
    },
    dark: {
      primary: "#0B0E10",
      secondary: "#14181C",
      additional: "#262D35",
    },
  },
  typography: {
    fontFamily: "Noto Sans",
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export default themeConfig;
