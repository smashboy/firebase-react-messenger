export type ThemeConfig = {
  colors: {
    brand: string;
    light: {
      primary: string;
      secondary: string;
      additional: string;
    };
    dark: {
      primary: string;
      secondary: string;
      additional: string;
    };
  };
  typography: {
    fontFamily: string;
    fontWeight: {
      normal: number;
      medium: number;
      bold: number;
    };
  };
};

const themeConfig: ThemeConfig = {
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
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export default themeConfig;
