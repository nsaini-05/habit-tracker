import store from "./store";
import { Provider } from "react-redux";
import AppLayout from "./ui/AppLayout/AppLayout";
function App() {
  return (
    <Provider store={store}>
      {/* <div className="centered-container">
        <div className="sidebar">SideBar</div>
        <div className="main-habits-container">
          <HabitsTable />
        </div>
      </div> */}
      <AppLayout />
    </Provider>
  );
}

export default App;
