import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONVERSATION_COLLECTION, MESSAGES_COLLECTION } from "../../../core/firebase/collections";
import { firestore } from "../../../core/firebase/initializeFirebase";
import { Message, NewMessage } from "../../../core/firebase/models";
import { RootState } from "../../../core/store";
import { fetchReplies } from "./fetchActions";
import { addNewReply } from "./threadSlice";

let observer: null | (() => void) = null;

const ThreadListeners: React.FC = ({ children }) => {
  const { isLoading, replies, threadMessageId, conversationId } = useSelector(
    (state: RootState) => ({
      isLoading: state.thread.isLoading,
      replies: state.thread.replies,
      threadMessageId: state.thread.message?.id,
      conversationId: state.conversation.info!.id,
    })
  );

  const dispatch = useDispatch();

  const [listenersInitialized, setListenersInitialized] = useState(false);

  useEffect(() => {
    return () => {
      handleClearListener();
    };
  }, []);

  useEffect(() => {
    if (threadMessageId) dispatch(fetchReplies());

    handleClearListener();
  }, [threadMessageId]);

  const handleClearListener = () => {
    if (observer) {
      setListenersInitialized(false);
      observer?.();
      observer = null;
    }
  };

  useEffect(() => {
    if (isLoading || replies === null || listenersInitialized) return;

    setListenersInitialized(true);

    observer = firestore
      .collection(CONVERSATION_COLLECTION)
      .doc(conversationId)
      .collection(MESSAGES_COLLECTION)
      .onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const newMessageId = change.doc.id;
            const newMessageData = change.doc.data() as NewMessage;
            const newMessageDate = new Date(change.doc.data().date.toDate());

            const lastMessageDate = new Date(Date.parse(replies[0]?.date || ""));

            if (
              newMessageData.replyTo !== threadMessageId ||
              newMessageDate.getTime() < lastMessageDate.getTime()
            )
              return;

            const messagesIds = replies.map(({ id }) => id);

            const newMessage: Message = {
              ...(newMessageData as NewMessage),
              date: newMessageDate.toString(),
              id: newMessageId,
            };

            if (messagesIds.includes(newMessage.id)) return;

            dispatch(addNewReply(newMessage));
          }
        });
      });
  }, [isLoading, replies, listenersInitialized, conversationId, threadMessageId]);

  return <Fragment>{children}</Fragment>;
};

export default ThreadListeners;
