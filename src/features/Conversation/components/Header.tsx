/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Button from "../../../core/components/Button";
import Divider from "../../../core/components/Divider";
import HashIcon from "../../../core/components/icons/HashIcon";
import TrashIcon from "../../../core/components/icons/TrashIcon";
import Typography from "../../../core/components/Typography";

const Header = () => {
  return (
    <div css={{ width: "100%" }}>
      <div css={{ display: "flex", padding: "15.2px 24px" }}>
        <div css={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <HashIcon color="primary" size={15.5} />
          <Typography size={18.57} color="primary" css={{ marginLeft: "7px" }}>
            general
          </Typography>
        </div>
        <Button variant="text">
          <TrashIcon />
        </Button>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
