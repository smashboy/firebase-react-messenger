import { useState } from "react";
import { useSelector } from "react-redux";
import { NewMessage } from "../firebase/models";
import { RootState } from "../store";
import useSession from "../store/sessionStore/useSession";
import Button from "./Button";
import Divider from "./Divider";
import SendIcon from "./icons/SendIcon";
import Input from "./Input";

export type FooterProps = {
  channelName?: string;
  onMessageSend?: (message: NewMessage) => void;
};

const Footer: React.FC<FooterProps> = ({ channelName, onMessageSend }) => {
  const [username, { login }] = useSession();

  const messageId = useSelector((state: RootState) => state.thread.message?.id);

  const [messageContent, setMessageContent] = useState("");

  const handleNewMessage = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMessageContent(event.currentTarget.value);

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!messageContent) return;
    if (!username) return login();

    const newMessage: NewMessage = {
      username,
      date: new Date().toString(),
      message: messageContent,
      repliesFrom: [],
      repliesCounter: 0,
      replyTo: messageId && !channelName ? messageId : null,
    };

    onMessageSend?.(newMessage);
    setMessageContent("");
  };

  return (
    <div css={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}>
      <Divider />
      <form onSubmit={handleSendMessage} css={{ display: "flex", padding: "16px" }}>
        <Input
          value={messageContent}
          onChange={handleNewMessage}
          placeholder={channelName ? `Message #${channelName}` : "Reply..."}
          fullWidth
        />
        <Button
          color={messageContent ? "brand" : "default"}
          css={{ marginLeft: "16px", lineHeight: 0 }}
          type="submit"
        >
          <SendIcon color={messageContent ? "primary" : "additional"} />
        </Button>
      </form>
    </div>
  );
};

export default Footer;
