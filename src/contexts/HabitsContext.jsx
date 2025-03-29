import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorageHook";
const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const { getLocalStorage } = useLocalStorage();
  const [habits, setHabits] = useState(() => {
    return getLocalStorage("habits") || [];
  });
  const [updateHabit, setUpdateHabit] = useState(null);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <HabitsContext.Provider
      value={{ habits, setHabits, updateHabit, setUpdateHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export { HabitsProvider, HabitsContext };
