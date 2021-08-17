import { Fragment } from "react";
/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";
import { ThemeConfig } from "./themeConfig";
import useTheme from "./useTheme";

const globalStyles = (theme: ThemeConfig) => css`
  body {
    background-color: ${theme.colors.dark.secondary};
  }
`;

const GlobalStyles: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Global styles={globalStyles(theme)} />
      {children}
    </Fragment>
  );
};

export default GlobalStyles;
