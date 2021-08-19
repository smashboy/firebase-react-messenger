import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { resetThread, setMessage } from "../../../features/Thread/store/threadSlice";
import Avatar from "../Avatar";
import Typography from "../Typography";
import {
  messageActionAreaStyle,
  messageContainerStyle,
  messageContainerVariant,
  messageHeaderStyle,
  repliesContainerStyle,
} from "./MessageItem.styles";
import { MessageItemProps } from "./MessageItem.types";

const MessageItem: React.FC<MessageItemProps> = ({ variant = "conversation", message }) => {
  const { username, date, message: messageContent, repliesFrom, repliesCounter } = message;

  const dispatch = useDispatch();

  const repliesFromCounter = useMemo(() => repliesFrom?.length || 0, [repliesFrom]);

  const handleOpenThread = () => {
    if (variant === "conversation") {
      dispatch(resetThread());
      dispatch(setMessage(message));
    }
  };

  return (
    <div css={[messageContainerStyle, messageContainerVariant(variant)]}>
      <Avatar
        src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
        alt={username}
        css={{ marginTop: "3px" }}
      />
      <div onClick={handleOpenThread} css={messageActionAreaStyle(variant)}>
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
            {new Date(Date.parse(date)).toLocaleTimeString("en-US").replace(/(.*)\D\d+/, "$1")}
          </Typography>
        </div>
        <Typography lineHeight={21} css={{ marginTop: "4px", wordBreak: "break-word" }}>
          {messageContent}
        </Typography>
        {repliesFromCounter > 0 && variant === "conversation" && (
          <div css={repliesContainerStyle}>
            {repliesFrom!.map((reply) => (
              <Avatar
                key={reply}
                src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
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
