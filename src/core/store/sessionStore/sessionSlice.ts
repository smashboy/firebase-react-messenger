import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SessionState = {
  username: string | null;
};

const initialState: SessionState = {
  username: null,
};

const SESSION_KEY = "username";

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      sessionStorage.setItem(SESSION_KEY, action.payload);
    },
    checkSession: (state) => {
      const currentUser = sessionStorage.getItem(SESSION_KEY);
      if (currentUser) state.username = currentUser;
    },
  },
});

export const { login, checkSession } = sessionSlice.actions;

export const sessionReducer = sessionSlice.reducer;
