/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import HashIcon from "../../../core/components/icons/HashIcon";
import Typography from "../../../core/components/Typography";
import { Conversation } from "../../../core/firebase/models";
import { RootState } from "../../../core/store";
import { resetConversation, setInfo } from "../../Conversation/store/conversationSlice";

const ConversationItem: React.FC<Conversation> = ({ name, id }) => {
  const selectedConversationId = useSelector((state: RootState) => state.conversation.info?.id);
  const dispatch = useDispatch();

  const handleOpenConversation = () => {
    if (selectedConversationId === id) return;

    dispatch(resetConversation());
    dispatch(setInfo({ name, id }));
  };
  return (
    <li
      onClick={handleOpenConversation}
      css={{ display: "flex", alignItems: "center", cursor: "pointer", marginTop: "16px" }}
    >
      <HashIcon />
      <Typography css={{ marginLeft: "7px" }}>{name}</Typography>
    </li>
  );
};

export default ConversationItem;
