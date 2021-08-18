/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Button from "./Button";
import Divider from "./Divider";
import SendIcon from "./icons/SendIcon";
import Input from "./Input";

export type FooterProps = {
  channelName?: string;
  onMessageSend?: (message: string) => void;
};

const Footer: React.FC<FooterProps> = ({ channelName, onMessageSend }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewMessage(event.currentTarget.value);

  const handleSendMessage = () => {
    if (!newMessage) return;
    onMessageSend?.(newMessage);
  };

  return (
    <div css={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}>
      <Divider />
      <div css={{ display: "flex", padding: "16px" }}>
        <Input
          value={newMessage}
          onChange={handleNewMessage}
          placeholder={channelName ? `Message #${channelName}` : "Reply..."}
          fullWidth
        />
        <Button
          color={newMessage ? "brand" : "default"}
          css={{ marginLeft: "16px", lineHeight: 0 }}
          onClick={handleSendMessage}
        >
          <SendIcon color={newMessage ? "primary" : "additional"} />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
