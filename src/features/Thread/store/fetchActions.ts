import { createAsyncThunk } from "@reduxjs/toolkit";
import { MESSAGES_COLLECTION, CONVERSATION_COLLECTION } from "../../../core/firebase/collections";
import { firestore } from "../../../core/firebase/initializeFirebase";
import { NewMessage, Message } from "../../../core/firebase/models";
import { RootState } from "../../../core/store";
import { QuerySnapshot, DocumentData } from "@firebase/firestore-types";
import { REPLIES_PAGINATION_LIMIT } from "./threadSlice";

export const fetchReplies = createAsyncThunk("thread/fetch", async (_, thunk) => {
  const state = thunk.getState() as RootState;

  const { info } = state.conversation;
  const { message, cursor } = state.thread;

  const conversationId = info!.id;
  const messageId = message!.id;

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
      .where("replyTo", "==", messageId)
      .orderBy("date", "asc")
      .startAfter(last.data()!.date)
      .limit(REPLIES_PAGINATION_LIMIT)
      .get();
  } else {
    snapshot = await firestore
      .collection(CONVERSATION_COLLECTION)
      .doc(conversationId)
      .collection(MESSAGES_COLLECTION)
      .where("replyTo", "==", messageId)
      .orderBy("date", "asc")
      .limit(REPLIES_PAGINATION_LIMIT)
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
});

export const createNewReply = createAsyncThunk(
  "thread/new-reply",
  async ({ date, replyTo, username, ...otherProps }: NewMessage, thunk) => {
    const state = thunk.getState() as RootState;

    const { info } = state.conversation;

    const newReplyRef = await firestore
      .collection(CONVERSATION_COLLECTION)
      .doc(info!.id)
      .collection(MESSAGES_COLLECTION)
      .add({
        ...otherProps,
        replyTo,
        username,
      });

    await firestore
      .collection(CONVERSATION_COLLECTION)
      .doc(info!.id)
      .collection(MESSAGES_COLLECTION)
      .doc(newReplyRef.id)
      .update({
        date: new Date(Date.parse(date)),
      });

    // Update main thread message data
    const messageSnapshot = await firestore
      .collection(CONVERSATION_COLLECTION)
      .doc(info!.id)
      .collection(MESSAGES_COLLECTION)
      .doc(replyTo!)
      .get();

    const message = messageSnapshot.data() as Message;

    await firestore
      .collection(CONVERSATION_COLLECTION)
      .doc(info!.id)
      .collection(MESSAGES_COLLECTION)
      .doc(replyTo!)
      .update({
        repliesFrom: message.repliesFrom.includes(username)
          ? message.repliesFrom
          : [...message.repliesFrom, username],
        repliesCounter: message.repliesCounter + 1,
      });
  }
);
