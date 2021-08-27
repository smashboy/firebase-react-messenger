import { createAsyncThunk } from "@reduxjs/toolkit";
import { CONVERSATION_COLLECTION } from "../../../core/firebase/collections";
import { firestore } from "../../../core/firebase/initializeFirebase";
import { Conversation, NewConversation } from "../../../core/firebase/models";

export const fetchConversations = createAsyncThunk("conversations/fetch", async () => {
  try {
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
  } catch (error) {
    console.log("Error:conversations/fetch");
    console.error(error);
    return [];
  }
});

export const createNewConversation = createAsyncThunk(
  "conversations/create",
  async (name: string) => {
    try {
      const newConversatoin: NewConversation = {
        name,
      };

      await firestore.collection(CONVERSATION_COLLECTION).add(newConversatoin);
    } catch (error) {
      console.log("Error:conversations/create");
      console.error(error);
    }
  }
);
