import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
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
  }
}
