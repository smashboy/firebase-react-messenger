/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useMemo } from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import Typography from "../Typography";
import {
  messageContainerStyle,
  messageContainerVariant,
  messageHeaderStyle,
  repliesContainerStyle,
} from "./MessageItem.styles";
import { MessageItemProps } from "./MessageItem.types";

const MessageItem: React.FC<MessageItemProps> = ({
  variant = "conversation",
  message: { avatarUrl, username, date, message, repliesFrom },
}) => {
  const repliesCounter = useMemo(() => repliesFrom?.length || 0, [repliesFrom]);

  return (
    <div css={[messageContainerStyle, messageContainerVariant(variant)]}>
      <Avatar src={avatarUrl} alt={username} css={{ marginTop: "3px" }} />
      <div>
        <div css={messageHeaderStyle}>
          <Typography color="primary" fontStyle="bold">
            {username}
          </Typography>
          <Typography
            color="additional"
            size={13}
            fontStyle="light"
            css={{ marginLeft: "8px", marginTop: "2px" }}
          >
            {date.toLocaleTimeString("en-US").replace(/(.*)\D\d+/, "$1")}
          </Typography>
        </div>
        <Typography lineHeight={21} css={{ marginTop: "4px" }}>
          {message}
        </Typography>
        {repliesCounter > 0 && variant === "conversation" && (
          <div css={repliesContainerStyle}>
            {repliesFrom!.map((reply) => (
              <Avatar
                key={reply}
                src={avatarUrl}
                alt={reply}
                size="small"
                css={{ marginRight: "8px" }}
              />
            ))}
            <Button variant="text" size="small">
              <Typography color="brand" size={14}>{`${repliesCounter} ${
                repliesCounter > 1 ? "replies" : "reply"
              }`}</Typography>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
