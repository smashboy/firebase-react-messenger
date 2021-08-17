import { Theme } from "@emotion/react";

export type CssProps = React.CSSProperties | ((theme: Theme) => React.CSSProperties);
