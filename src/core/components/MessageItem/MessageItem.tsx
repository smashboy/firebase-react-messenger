/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useMemo } from "react";
import { Message } from "../../firebase/models";
import Avatar from "../Avatar";
import Typography from "../Typography";
import {
  messageActionAreaStyle,
  messageContainerStyle,
  messageHeaderStyle,
  repliesContainerStyle,
} from "./MessageItem.styles";

const MessageItem: React.FC<Message> = ({ avatarUrl, username, date, message, repliesFrom }) => {
  const repliesCounter = useMemo(() => repliesFrom?.length || 0, [repliesFrom]);

  return (
    <div css={messageContainerStyle}>
      <Avatar src={avatarUrl} alt={username} css={{ marginTop: "3px" }} />
      <div css={messageActionAreaStyle}>
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
        {repliesCounter > 0 && (
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
            <Typography color="brand" size={14}>{`${repliesCounter} ${
              repliesCounter > 1 ? "replies" : "reply"
            }`}</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
