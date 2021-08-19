import { Fragment } from "react";
import { useSelector } from "react-redux";
import Divider from "../../../core/components/Divider";
import MessageItem from "../../../core/components/MessageItem";
import { RootState } from "../../../core/store";

const ThreadMessage = () => {
  const message = useSelector((state: RootState) => state.thread.message!);

  return (
    <Fragment>
      <div css={{ padding: "16px" }}>
        <MessageItem message={message} variant="thread-header" />
      </div>
      <Divider />
    </Fragment>
  );
};

export default ThreadMessage;
