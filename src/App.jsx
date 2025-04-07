import Habits from "./components/Habits/Habits";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="centered-container">
        <div className="sidebar">SideBar</div>
        <div class="main-habits-container">
          <InputForm />

          <Header />
          <Habits />
        </div>
      </div>
    </Provider>
  );
}

export default App;
