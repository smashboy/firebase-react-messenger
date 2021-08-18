import { useState } from "react";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONVERSATION_COLLECTION } from "../../../core/firebase/collections";
import { firestore } from "../../../core/firebase/initializeFirebase";
import { Conversation, NewConversation } from "../../../core/firebase/models";
import { RootState } from "../../../core/store/store";
import { addNewConversation } from "./conversationsSlice";
import { fetchConversations } from "./fetchActions";

const ConversationsListeners: React.FC = ({ children }) => {
  const { isLoading, conversations } = useSelector((state: RootState) => state.conversations);
  const dispatch = useDispatch();

  const [listenersInitialized, setListenersInitialized] = useState(false);

  useEffect(() => {
    dispatch(fetchConversations());
  }, []);

  useEffect(() => {
    if (isLoading || conversations === null || listenersInitialized) return;

    setListenersInitialized(true);

    firestore.collection(CONVERSATION_COLLECTION).onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const newConversationId = change.doc.id;
          const newConversation: Conversation = {
            ...(change.doc.data() as NewConversation),
            id: newConversationId,
          };

          const fetchedConversationsIds = conversations.map(({ id }) => id);

          if (fetchedConversationsIds.includes(newConversationId)) return;

          dispatch(addNewConversation(newConversation));
        }
      });
    });
  }, [isLoading, conversations, listenersInitialized]);

  return <Fragment>{children}</Fragment>;
};

export default ConversationsListeners;
