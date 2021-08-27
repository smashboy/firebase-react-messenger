import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONVERSATION_COLLECTION, MESSAGES_COLLECTION } from "../../../core/firebase/collections";
import { firestore } from "../../../core/firebase/initializeFirebase";
import { Message, NewMessage } from "../../../core/firebase/models";
import { RootState } from "../../../core/store";
import { addNewMessage, updateMessageReplies } from "./conversationSlice";
import { fetchMessages } from "./fetchActions";

let observer: null | (() => void) = null;

const ConversationListeners: React.FC = ({ children }) => {
  const { isLoading, messages, id } = useSelector((state: RootState) => ({
    isLoading: state.conversation.isLoading,
    messages: state.conversation.messages,
    id: state.conversation.info?.id,
  }));
  const dispatch = useDispatch();

  const [listenersInitialized, setListenersInitialized] = useState(false);

  useEffect(() => {
    if (id) dispatch(fetchMessages());

    handleClearListener();
  }, [id]);

  const handleClearListener = () => {
    if (observer) {
      setListenersInitialized(false);
      observer?.();
      observer = null;
    }
  };

  useEffect(() => {
    if (isLoading || messages === null || listenersInitialized) return;

    setListenersInitialized(true);

    observer = firestore
      .collection(CONVERSATION_COLLECTION)
      .doc(id)
      .collection(MESSAGES_COLLECTION)
      .onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "modified") {
            const newMessageId = change.doc.id;
            const newMessageData = change.doc.data() as NewMessage;
            const newMessageDate = new Date(change.doc.data().date.toDate());

            // const lastMessageDate = new Date(Date.parse(messages[0]?.date || ""));

            if (newMessageData.replyTo)
              return dispatch(
                updateMessageReplies({
                  messageId: newMessageData.replyTo!,
                  username: newMessageData.username,
                })
              );
            if (newMessageData.repliesFrom.length > 0) return;

            // if (newMessageData.replyTo || newMessageDate.getTime() < lastMessageDate.getTime())
            //   return;

            // const messagesIds = messages.map(({ id }) => id);

            const newMessage: Message = {
              ...(newMessageData as NewMessage),
              date: newMessageDate.toString(),
              id: newMessageId,
            };

            // if (messagesIds.includes(newMessage.id)) return;

            dispatch(addNewMessage(newMessage));
          }
        });
      });
  }, [isLoading, messages, listenersInitialized, id]);

  return <Fragment>{children}</Fragment>;
};

export default ConversationListeners;
