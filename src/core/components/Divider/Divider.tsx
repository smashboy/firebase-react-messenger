import { dividerOrientationStyle, dividerStaticStyles } from "./Divider.styles";
import { DividerProps } from "./Divider.types";

const Divider: React.FC<DividerProps> = ({ orientation = "horizontal" }) => {
  return <hr css={(theme) => [dividerStaticStyles(theme), dividerOrientationStyle(orientation)]} />;
};

export default Divider;
