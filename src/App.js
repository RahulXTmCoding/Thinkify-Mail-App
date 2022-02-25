import MailApp from "./container";
import { fetchMails } from "./store/actions";
import ReduxProvider, { store } from "./store/provider";

store.dispatch(fetchMails());

function App() {
  return (
    <ReduxProvider>
      <MailApp />
    </ReduxProvider>
  );
}

export default App;
