import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../../../core/firebase/models";
import { createNewReply, fetchReplies } from "./fetchActions";

export type ThreadState = {
  message: Message | null;
  cursor: string | null;
  replies: Message[] | null;
  isLoading: boolean;
};

export const REPLIES_PAGINATION_LIMIT = 10;

const initialState: ThreadState = {
  message: null,
  cursor: null,
  replies: null,
  isLoading: false,
};

const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<Message>) => {
      state.message = action.payload;
    },
    resetThread: () => initialState,

    addNewReply: (state, action: PayloadAction<Message>) => {
      if (state.replies) {
        state.replies.push(action.payload);
        state.cursor = state.replies[state.replies.length - 1]?.id || null;
        return;
      }

      state.replies = [action.payload];
      state.cursor = state.replies[state.replies.length - 1]?.id || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReplies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReplies.fulfilled, (state, action) => {
        if (state.replies) {
          state.replies.push(...action.payload);
          state.cursor = state.replies[state.replies.length - 1]?.id || null;
          state.isLoading = false;
          return;
        }

        state.replies = action.payload;
        state.cursor = state.replies[state.replies.length - 1]?.id || null;
        state.isLoading = false;
      })
      .addCase(fetchReplies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createNewReply.fulfilled, (state) => {
        state.message!.repliesCounter++;
      });
  },
});

export const { setMessage, resetThread, addNewReply } = threadSlice.actions;

export const threadReducer = threadSlice.reducer;
