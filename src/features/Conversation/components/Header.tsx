/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../core/components/Button";
import Header from "../../../core/components/Header";
import HashIcon from "../../../core/components/icons/HashIcon";
import TrashIcon from "../../../core/components/icons/TrashIcon";
import Typography from "../../../core/components/Typography";
import { RootState } from "../../../core/store";
import { removeConversation } from "../../ConversationsList/store/conversationsSlice";
import { resetThread } from "../../Thread/store/threadSlice";
import { resetConversation } from "../store/conversationSlice";
import { deleteConversation } from "../store/fetchActions";

const ConversationHeader = () => {
  const { name, id } = useSelector((state: RootState) => state.conversation.info!);
  const dispatch = useDispatch();

  const handleDeleteConversation = async () => {
    await dispatch(deleteConversation(id));
    dispatch(resetThread());
    dispatch(resetConversation());
    dispatch(removeConversation(id));
  };

  return (
    <Header>
      <div css={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
        <HashIcon color="primary" size={15.5} />
        <Typography size={18.6} color="primary" css={{ marginLeft: "7px" }}>
          {name}
        </Typography>
      </div>
      <Button onClick={handleDeleteConversation} variant="text">
        <TrashIcon />
      </Button>
    </Header>
  );
};

export default ConversationHeader;
