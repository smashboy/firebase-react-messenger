import { configureStore } from "@reduxjs/toolkit";
import { conversationsReducer } from "../../features/ConversationsList/store/conversationsSlice";
import { sessionReducer } from "./sessionStore/sessionSlice";

const store = configureStore({
  reducer: {
    authentication: sessionReducer,
    conversations: conversationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
