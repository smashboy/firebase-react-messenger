import AppContainer from "./core/components/AppContainer";
import Conversation from "./features/Conversation";
import ConversationsList from "./features/ConversationsList";

function App() {
  return (
    <AppContainer>
      <ConversationsList />
      <Conversation />
    </AppContainer>
  );
}

export default App;
