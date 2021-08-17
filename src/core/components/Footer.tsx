/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Button from "./Button";
import Divider from "./Divider";
import SendIcon from "./icons/SendIcon";
import Input from "./Input";

const Footer = () => {
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewMessage(event.currentTarget.value);

  return (
    <div css={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}>
      <Divider />
      <div css={{ display: "flex", padding: "16px" }}>
        <Input
          value={newMessage}
          onChange={handleNewMessage}
          placeholder="Message #general"
          fullWidth
        />
        <Button
          color={newMessage ? "brand" : "default"}
          css={{ marginLeft: "16px", lineHeight: 0 }}
        >
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
