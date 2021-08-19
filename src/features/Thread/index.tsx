/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useRef } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VirtuosoHandle } from "react-virtuoso";
import Divider from "../../core/components/Divider";
import Footer from "../../core/components/Footer";
import { NewMessage } from "../../core/firebase/models";
import { RootState } from "../../core/store";
import useSession from "../../core/store/sessionStore/useSession";
import { updateMessageReplies } from "../Conversation/store/conversationSlice";
import Header from "./components/Header";
import MessagesList from "./components/MessagesList";
import RepliesCounter from "./components/RepliesCounter";
import ThreadMessage from "./components/ThreadMessage";
import { createNewReply } from "./store/fetchActions";

const Thread = () => {
  const [username] = useSession();

  const listRef = useRef<VirtuosoHandle>(null);

  const { threadMessageId, lastMessageIndex } = useSelector((state: RootState) => ({
    threadMessageId: state.thread.message?.id,
    lastMessageIndex: (state.thread.replies?.length || 1) - 1,
  }));
  const dispatch = useDispatch();

  const handeSendReply = (newMessage: NewMessage) => {
    dispatch(updateMessageReplies({ messageId: threadMessageId!, username: username! }));
    dispatch(createNewReply(newMessage));

    listRef.current!.scrollToIndex({
      behavior: "smooth",
      index: lastMessageIndex,
    });
  };

  return (
    <Fragment>
      {threadMessageId && (
        <div
          css={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1px 405px" }}
        >
          <Divider orientation="vertical" />
          <div
            css={{
              width: "99%",
              height: "100%",
              display: "grid",
              gridTemplateRows: "56px auto 1px 56px 1fr",
            }}
          >
            <Header />
            <ThreadMessage />
            <RepliesCounter />
            <div
              css={{
                width: "100%",
                position: "relative",
              }}
            >
              <MessagesList ref={listRef} />
              <Footer onMessageSend={handeSendReply} />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Thread;
