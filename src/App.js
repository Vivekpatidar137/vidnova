import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
