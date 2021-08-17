import { Theme } from "@emotion/react";

export const getCssProps = (
  theme: Theme,
  props?: React.CSSProperties | ((theme: Theme) => React.CSSProperties)
) => (typeof props === "function" ? props(theme) : props);
