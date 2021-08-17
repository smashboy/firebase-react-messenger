import { useTheme as useEmotionTheme } from "@emotion/react";
import { ThemeConfig } from "./themeConfig";

const useTheme = () => {
  const theme = useEmotionTheme();

  return theme as ThemeConfig;
};

export default useTheme;
