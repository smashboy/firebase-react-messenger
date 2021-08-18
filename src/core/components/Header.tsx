/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Divider from "./Divider";

const Header: React.FC = ({ children }) => {
  return (
    <div css={{ width: "100%" }}>
      <div
        css={{ display: "flex", padding: "12.5px 24px", minHeight: "31px", alignItems: "center" }}
      >
        {children}
      </div>
      <Divider />
    </div>
  );
};

export default Header;
