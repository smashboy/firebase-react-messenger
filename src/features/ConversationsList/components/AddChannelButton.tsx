/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Button from "../../../core/components/Button";
import AddIcon from "../../../core/components/icons/AddIcon";
import Typography from "../../../core/components/Typography";

const AddChannelButton = () => {
  return (
    <div css={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
      <Button borderRadius="small" css={{ width: "21px", height: "21px", lineHeight: "10px" }}>
        <AddIcon />
      </Button>
      <Typography css={{ marginLeft: "7px" }}>Add channel</Typography>
    </div>
  );
};

export default AddChannelButton;
