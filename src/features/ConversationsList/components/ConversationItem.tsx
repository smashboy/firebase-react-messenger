/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import HashIcon from "../../../core/components/icons/HashIcon";
import Typography from "../../../core/components/Typography";
import { Conversation } from "../../../core/firebase/models";

const ConversationItem: React.FC<Conversation> = ({ name, id }) => {
  return (
    <li css={{ display: "flex", alignItems: "center", cursor: "pointer", paddingBottom: "16px" }}>
      <HashIcon />
      <Typography css={{ marginLeft: "7px" }}>{name}</Typography>
    </li>
  );
};

export default ConversationItem;
