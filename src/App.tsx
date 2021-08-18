import AppContainer from "./core/components/AppContainer";
import Conversation from "./features/Conversation";
import ConversationsList from "./features/ConversationsList";
import Thread from "./features/Thread";

function App() {
  return (
    <AppContainer>
      <ConversationsList />
      <Conversation />
      <Thread />
    </AppContainer>
  );
}

export default App;
