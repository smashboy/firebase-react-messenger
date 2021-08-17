import { Fragment } from "react";
/** @jsxImportSource @emotion/react */
import { Global, css, jsx, useTheme, Theme } from "@emotion/react";

const globalStyles = (theme: Theme) => css`
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
