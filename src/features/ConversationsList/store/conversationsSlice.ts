import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation } from "../../../core/firebase/models";
import { fetchConversations } from "./fetchActions";

export type ConversationsState = {
  conversations: Conversation[] | null;
  isLoading: boolean;
};

const initialState: ConversationsState = {
  conversations: null,
  isLoading: false,
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addNewConversation: (state, action: PayloadAction<Conversation>) => {
      if (state.conversations) {
        state.conversations.push(action.payload);
        return;
      }
      state.conversations = [action.payload];
    },
    removeConversation: (state, action: PayloadAction<string>) => {
      const conversationId = action.payload;
      state.conversations = state.conversations!.filter(({ id }) => conversationId !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.conversations = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchConversations.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addNewConversation, removeConversation } = conversationsSlice.actions;

export const conversationsReducer = conversationsSlice.reducer;
