import { useSelector } from "react-redux";
import Divider from "../../core/components/Divider";
import Typography from "../../core/components/Typography";
import { RootState } from "../../core/store";
import AddChannelButton from "./components/AddChannelButton";
import ConversationItem from "./components/ConversationItem";
import ConversationsListeners from "./store/ConversationsListeners";

const ConversationsList = () => {
  const conversations = useSelector((state: RootState) => state.conversations.conversations);

  return (
    <ConversationsListeners>
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
            css={{ paddingBottom: "8px" }}
            lineHeight={30}
          >
            Conversations
          </Typography>
          <ul css={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}>
            {conversations?.map((conversation) => (
              <ConversationItem key={conversation.id} {...conversation} />
            ))}
          </ul>
          <AddChannelButton />
        </div>
        <Divider orientation="vertical" />
      </div>
    </ConversationsListeners>
  );
};

export default ConversationsList;
