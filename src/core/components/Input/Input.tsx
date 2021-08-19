import { inputStaticStyles, inputWidthStyle } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ fullWidth = false, css, ...otherProps }) => {
  return (
    <input
      css={(theme) => [inputWidthStyle(fullWidth), inputStaticStyles(theme)]}
      {...otherProps}
    />
  );
};

export default Input;
