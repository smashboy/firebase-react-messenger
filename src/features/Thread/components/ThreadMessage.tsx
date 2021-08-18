/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import Divider from "../../../core/components/Divider";
import MessageItem from "../../../core/components/MessageItem";
import { tempMessages } from "../../Conversation/components/MessagesList";

const ThreadMessage = () => {
  return (
    <Fragment>
      <div css={{ padding: "16px" }}>
        <MessageItem message={tempMessages[1]} variant="thread-header" />
      </div>
      <Divider />
    </Fragment>
  );
};

export default ThreadMessage;
