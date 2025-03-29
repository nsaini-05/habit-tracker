import { createContext, useState } from "react";
const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState(() => {
    const localData = localStorage.getItem("habits");
    const sampleInput = [{ id: 100, name: "cycling", dates: [] }];
    return localData ? JSON.parse(localData) : sampleInput;
  });
  const [updateHabit, setUpdateHabit] = useState(null);
  return (
    <HabitsContext.Provider
      value={{ habits, setHabits, updateHabit, setUpdateHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export { HabitsProvider, HabitsContext };
