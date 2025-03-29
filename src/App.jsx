import Header from "./components/Header/Header";
import HabitRow from "./components/HabitRow/HabitRow";
function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="habitsContainer">
        <HabitRow />
        <HabitRow />
        <HabitRow />
        <HabitRow />
      </div>
    </div>
  );
}

export default App;
