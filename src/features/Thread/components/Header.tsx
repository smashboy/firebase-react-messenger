/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Button from "../../../core/components/Button";
import Header from "../../../core/components/Header";
import CloseIcon from "../../../core/components/icons/CloseIcon";
import Typography from "../../../core/components/Typography";

const ThreadHeader = () => {
  return (
    <Header>
      <div css={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
        <Typography size={18} color="primary">
          Thread
        </Typography>
      </div>
      <Button size="small" variant="text" css={{ marginTop: "6px" }}>
        <CloseIcon />
      </Button>
    </Header>
  );
};

export default ThreadHeader;
