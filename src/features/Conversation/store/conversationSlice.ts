import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation, Message } from "../../../core/firebase/models";
import { deleteConversation, fetchMessages } from "./fetchActions";

export type ConversationState = {
  info: null | Conversation;
  messages: null | Message[];
  cursor: string | null;
  isLoading: boolean;
};

export const MESSAGES_PAGINATION_LIMIT = 25;

const initialState: ConversationState = {
  info: null,
  messages: null,
  cursor: null,
  isLoading: false,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<Conversation>) => {
      state.info = action.payload;
    },
    resetConversation: () => initialState,
    addNewMessage: (state, action: PayloadAction<Message>) => {
      if (state.messages) {
        state.messages.unshift(action.payload);
        state.cursor = state.messages[state.messages.length - 1]?.id || null;
        return;
      }

      state.messages = [action.payload];
      state.cursor = state.messages[state.messages.length - 1]?.id || null;
    },
    updateMessageReplies: (
      state,
      action: PayloadAction<{ messageId: string; username: string }>
    ) => {
      const messageId = action.payload.messageId;
      const username = action.payload.username;

      state.messages = state.messages!.map((message) => {
        const { id, repliesFrom, repliesCounter, ...otherProps } = message;

        if (id === messageId) {
          return {
            ...otherProps,
            id,
            repliesFrom: repliesFrom.includes(username) ? repliesFrom : [...repliesFrom, username],
            repliesCounter: repliesCounter + 1,
          };
        }

        return message;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        if (state.messages) {
          state.messages.push(...action.payload);
          state.cursor = state.messages[state.messages.length - 1]?.id || null;
          state.isLoading = false;
          return;
        }

        state.messages = action.payload;
        state.cursor = state.messages[state.messages.length - 1]?.id || null;
        state.isLoading = false;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setInfo, addNewMessage, resetConversation, updateMessageReplies } =
  conversationSlice.actions;

export const conversationReducer = conversationSlice.reducer;
