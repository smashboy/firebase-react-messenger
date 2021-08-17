/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Button from "../../../core/components/Button";
import Header from "../../../core/components/Header";
import HashIcon from "../../../core/components/icons/HashIcon";
import TrashIcon from "../../../core/components/icons/TrashIcon";
import Typography from "../../../core/components/Typography";

const ConversationHeader = () => {
  return (
    <Header>
      <div css={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
        <HashIcon color="primary" size={15.5} />
        <Typography size={18.6} color="primary" css={{ marginLeft: "7px" }}>
          general
        </Typography>
      </div>
      <Button variant="text">
        <TrashIcon />
      </Button>
    </Header>
  );
};

export default ConversationHeader;
