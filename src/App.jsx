import store from "./store";
import { Provider } from "react-redux";
import HabitsTable from "./features/Habits/HabitsTable/HabitsTable";

function App() {
  return (
    <Provider store={store}>
      <div className="centered-container">
        <div className="sidebar">SideBar</div>
        <div className="main-habits-container">
          <HabitsTable />
          {/* <Header /> */}
          {/* <Habits /> */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
