/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useDispatch } from "react-redux";
import Button from "../../../core/components/Button";
import AddIcon from "../../../core/components/icons/AddIcon";
import Typography from "../../../core/components/Typography";
import useSession from "../../../core/store/sessionStore/useSession";
import { createNewConversation } from "../store/fetchActions";

const AddChannelButton = () => {
  const [username, { login }] = useSession();

  const dispatch = useDispatch();

  const handleAddChannel = () => {
    if (!username) return login();

    const newConversationName = window.prompt("Enter a name for the new conversation:");

    if (!newConversationName) return;

    dispatch(createNewConversation(newConversationName));
  };

  return (
    <div css={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
      <Button
        onClick={handleAddChannel}
        size="small"
        css={{ width: "21px", height: "21px", lineHeight: "10px" }}
      >
        <AddIcon />
      </Button>
      <Typography css={{ marginLeft: "7px" }}>Add channel</Typography>
    </div>
  );
};

export default AddChannelButton;
