import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import themeConfig from "./themeConfig";

const ThemeProvider: React.FC = ({ children }) => (
  <EmotionThemeProvider theme={themeConfig}>{children}</EmotionThemeProvider>
);

export default ThemeProvider;
