import { configureStore } from "@reduxjs/toolkit";
import { conversationReducer } from "../../features/Conversation/store/conversationSlice";
import { conversationsReducer } from "../../features/ConversationsList/store/conversationsSlice";
import { threadReducer } from "../../features/Thread/store/threadSlice";
import { sessionReducer } from "./sessionStore/sessionSlice";

const store = configureStore({
  reducer: {
    authentication: sessionReducer,
    conversations: conversationsReducer,
    conversation: conversationReducer,
    thread: threadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
