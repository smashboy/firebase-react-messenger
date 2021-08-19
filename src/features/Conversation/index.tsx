/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../core/components/Footer";
import { NewMessage } from "../../core/firebase/models";
import { RootState } from "../../core/store/store";
import Header from "./components/Header";
import MessagesList from "./components/MessagesList";
import { createNewMessage } from "./store/fetchActions";

const Conversation = () => {
  const info = useSelector((state: RootState) => state.conversation.info);
  const dispatch = useDispatch();

  const handleSendMessage = (newMessage: NewMessage) => dispatch(createNewMessage(newMessage));

  return (
    <div css={{ width: "100%", height: "100%", position: "relative" }}>
      {info && (
        <Fragment>
          <Header />
          <MessagesList />
          <Footer channelName="general" onMessageSend={handleSendMessage} />
        </Fragment>
      )}
    </div>
  );
};

export default Conversation;
