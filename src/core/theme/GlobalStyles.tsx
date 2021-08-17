import { Fragment } from "react";
/** @jsxImportSource @emotion/react */
import { Global, css, jsx, useTheme, Theme } from "@emotion/react";

const globalStyles = (theme: Theme) => css`
  body {
    background-color: ${theme.colors.dark.secondary};
    margin: 0;
  }
  @font-face {
    font-family: "Noto Sans Regular";
    src: local("Noto Sans Regular"), url("./fonts/NotoSans-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Noto Sans Medium";
    src: local("Noto Sans Medium"), url("./fonts/NotoSans-Medium.ttf") format("truetype");
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
