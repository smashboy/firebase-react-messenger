import { createAsyncThunk } from "@reduxjs/toolkit";
import { MESSAGES_COLLECTION, CONVERSATION_COLLECTION } from "../../../core/firebase/collections";
import { firestore } from "../../../core/firebase/initializeFirebase";
import { NewMessage, Message } from "../../../core/firebase/models";
import { RootState } from "../../../core/store";
import { MESSAGES_PAGINATION_LIMIT } from "./conversationSlice";
import { QuerySnapshot, DocumentData } from "@firebase/firestore-types";
import batchDelete from "../../../core/firebase/batchDelete";

export const fetchMessages = createAsyncThunk("conversation/fetch", async (_, thunk) => {
  try {
    const state = thunk.getState() as RootState;

    const { info, cursor } = state.conversation;

    const conversationId = info!.id;

    let snapshot: QuerySnapshot<DocumentData> | null = null;

    if (cursor) {
      const last = await firestore
        .collection(CONVERSATION_COLLECTION)
        .doc(conversationId)
        .collection(MESSAGES_COLLECTION)
        .doc(cursor)
        .get();

      snapshot = await firestore
        .collection(CONVERSATION_COLLECTION)
        .doc(conversationId)
        .collection(MESSAGES_COLLECTION)
        .where("replyTo", "==", null) // Reply messages should not appear in main channel
        .orderBy("date", "desc")
        .startAfter(last.data()!.date)
        .limit(MESSAGES_PAGINATION_LIMIT)
        .get();
    } else {
      snapshot = await firestore
        .collection(CONVERSATION_COLLECTION)
        .doc(conversationId)
        .collection(MESSAGES_COLLECTION)
        .where("replyTo", "==", null) // Reply messages should not appear in main channel
        .orderBy("date", "desc")
        .limit(MESSAGES_PAGINATION_LIMIT)
        .get();
    }

    if (snapshot.empty) return [];

    const messages = snapshot.docs.map((doc) => {
      const data = doc.data();

      const message: Message = {
        ...(data as NewMessage),
        date: new Date(data.date.toDate()).toString(),
        id: doc.id,
      };

      return message;
    });

    return messages;
  } catch (error) {
    console.log("Error:conversation/fetch");
    console.error(error);
    return [];
  }
});

export const createNewMessage = createAsyncThunk(
  "conversation/new-message",
  async ({ date, ...otherProps }: NewMessage, thunk) => {
    try {
      const state = thunk.getState() as RootState;

      const { info } = state.conversation;

      const newMessageRef = await firestore
        .collection(CONVERSATION_COLLECTION)
        .doc(info!.id)
        .collection(MESSAGES_COLLECTION)
        .add({
          ...otherProps,
        });

      await firestore
        .collection(CONVERSATION_COLLECTION)
        .doc(info!.id)
        .collection(MESSAGES_COLLECTION)
        .doc(newMessageRef.id)
        .update({
          date: new Date(Date.parse(date)),
        });
    } catch (error) {
      console.log("Error:conversation/new-message");
      console.error(error);
    }
  }
);

export const deleteConversation = createAsyncThunk(
  "conversation/delete",
  async (conversationId: string) => {
    try {
      const conversationRef = firestore.collection(CONVERSATION_COLLECTION).doc(conversationId);

      await batchDelete(conversationRef.collection(MESSAGES_COLLECTION).limit(15));
      await conversationRef.delete();
    } catch (error) {
      console.log("Error:conversation/delete");
      console.error(error);
    }
  }
);
