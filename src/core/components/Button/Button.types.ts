import { CssProps } from "../../types";

export type ButtonColor = "brand" | "default";
export type ButtonSize = "medium" | "small";
export type ButtonVariant = "text" | "contained";

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  css?: CssProps;
  size?: ButtonSize;
};
