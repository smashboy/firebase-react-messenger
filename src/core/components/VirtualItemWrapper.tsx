/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

const VirtualItemWrapper: React.FC = ({ children, ...otherProps }) => {
  return (
    <div css={{ margin: 0, position: "relative" }} {...otherProps}>
      {children}
    </div>
  );
};

export default VirtualItemWrapper;
