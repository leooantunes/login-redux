import Login from "./pages/Login";
import { Provider } from "react-redux";
import {store} from './redux/Helpers/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
