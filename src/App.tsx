import { Provider } from "react-redux";
import AppContainer from "./core/components/AppContainer";
import store from "./core/store";
import Conversation from "./features/Conversation";
import ConversationsList from "./features/ConversationsList";
import Thread from "./features/Thread";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <ConversationsList />
        <Conversation />
        <Thread />
      </AppContainer>
    </Provider>
  );
}

export default App;
