import AppLayout from "./ui/AppLayout/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import HabitsTable from "./features/Habits/HabitsTable/HabitsTable";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/dashboard" element={<HabitsTable />}></Route>
          <Route
            path="/stats"
            element={<h1>This is my stats page </h1>}
          ></Route>
          <Route
            path="/settings"
            element={<h2>This is my setting page </h2>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
