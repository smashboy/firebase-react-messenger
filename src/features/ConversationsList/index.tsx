/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Divider from "../../core/components/Divider";
import Typography from "../../core/components/Typography";
import { Conversation } from "../../core/firebase/models";
import AddChannelButton from "./components/AddChannelButton";
import ConversationItem from "./components/ConversationItem";

const tempConversations: Conversation[] = [
  {
    id: "1",
    name: "general",
  },
  {
    id: "2",
    name: "engineering",
  },
  {
    id: "3",
    name: "random",
  },
];

const ConversationsList = () => {
  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "300px 5px",
      }}
    >
      <div css={{ padding: "24px 24px 0 24px" }}>
        <Typography
          fontWeight="medium"
          fontStyle="medium"
          size={22}
          color="primary"
          lineHeight={30}
        >
          Conversations
        </Typography>
        <ul css={{ listStyleType: "none", paddingLeft: 0, margin: 0, paddingTop: "24px" }}>
          {tempConversations.map((conversation) => (
            <ConversationItem key={conversation.id} {...conversation} />
          ))}
        </ul>
        <AddChannelButton />
      </div>
      <Divider orientation="vertical" />
    </div>
  );
};

export default ConversationsList;
