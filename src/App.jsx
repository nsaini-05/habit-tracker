import Header from "./components/Header/Header";
import HabitRow from "./components/HabitRow/HabitRow";
import { useState } from "react";
function App() {
  const [habits, setHabits] = useState(() => {
    const localData = localStorage.getItem("habits");
    const sampleInput = Array.from({ length: 10 }).map((_, index) => {
      return {
        id: index,
        name: "",
        dates: [],
      };
    });
    return localData ? JSON.parse(localData) : sampleInput;
  });

  return (
    <div>
      <div className="main-container">
        <Header />
        {habits.length > 0 && (
          <div className="habitsContainer">
            {habits.map((habit) => {
              return (
                <HabitRow
                  habitData={habit}
                  key={habit.id}
                  setHabits={setHabits}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
