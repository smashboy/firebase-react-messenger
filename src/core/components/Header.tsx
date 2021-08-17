/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Divider from "./Divider";

const Header: React.FC = ({ children }) => {
  return (
    <div css={{ width: "100%" }}>
      <div css={{ display: "flex", padding: "15.2px 24px" }}>{children}</div>
      <Divider />
    </div>
  );
};

export default Header;
