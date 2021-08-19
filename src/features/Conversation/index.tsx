import { useRef } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VirtuosoHandle } from "react-virtuoso";
import Footer from "../../core/components/Footer";
import { NewMessage } from "../../core/firebase/models";
import { RootState } from "../../core/store";
import Header from "./components/Header";
import MessagesList from "./components/MessagesList";
import { createNewMessage } from "./store/fetchActions";

const Conversation = () => {
  const name = useSelector((state: RootState) => state.conversation.info?.name);
  const dispatch = useDispatch();

  const listRef = useRef<VirtuosoHandle>(null);

  const handleSendMessage = async (newMessage: NewMessage) => {
    await dispatch(createNewMessage(newMessage));
    listRef.current!.scrollToIndex({
      behavior: "smooth",
      index: 0,
    });
  };

  return (
    <div css={{ width: "100%", height: "100%", position: "relative" }}>
      {name && (
        <Fragment>
          <Header />
          <MessagesList ref={listRef} />
          <Footer channelName={name} onMessageSend={handleSendMessage} />
        </Fragment>
      )}
    </div>
  );
};

export default Conversation;
