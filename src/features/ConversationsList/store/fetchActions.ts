import { createAsyncThunk } from "@reduxjs/toolkit";
import { CONVERSATION_COLLECTION } from "../../../core/firebase/collections";
import { firestore } from "../../../core/firebase/initializeFirebase";
import { Conversation, NewConversation } from "../../../core/firebase/models";

export const fetchConversations = createAsyncThunk("conversations/fetch", async () => {
  const snapshot = await firestore.collection(CONVERSATION_COLLECTION).get();

  if (snapshot.empty) return [];

  const conversations = snapshot.docs.map((doc) => {
    const conversation: Conversation = {
      ...(doc.data() as NewConversation),
      id: doc.id,
    };

    return conversation;
  });

  return conversations;
});

export const createNewConversation = createAsyncThunk(
  "conversations/create",
  async (name: string) => {
    const newConversatoin: NewConversation = {
      name,
    };

    await firestore.collection(CONVERSATION_COLLECTION).add(newConversatoin);
  }
);

export const deleteConversation = createAsyncThunk(
  "conversations/delete",
  async (conversationId: string) => {
    await firestore.collection(CONVERSATION_COLLECTION).doc(conversationId).delete();

    return conversationId;
  }
);
