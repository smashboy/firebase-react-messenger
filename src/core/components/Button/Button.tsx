/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { CssProps } from "../../types";
import { getCssProps } from "../../utils";
import { getColor } from "./utils";

export type ButtonColor = "primary" | "default";

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "text" | "contained";
  color?: ButtonColor;
  css?: CssProps;
  borderRadius?: "medium" | "small";
};

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "default",
  borderRadius = "medium",
  css,
  children,
  ...otherProps
}) => {
  return (
    <button
      css={(theme) => ({
        backgroundColor: variant === "contained" ? getColor(color, theme) : "transparent",
        borderRadius: borderRadius === "medium" ? "9px" : "3px",
        padding: 0,
        border: "none",
        cursor: "pointer",
        ...getCssProps(theme, css),
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
