import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorageHook";
const HabitsContext = createContext();
const datesArray = Array.from({ length: 31 }, (_, i) => i + 1);

const HabitsProvider = ({ children }) => {
  const { getLocalStorage } = useLocalStorage();

  const initialState = {
    habits: getLocalStorage("habits") || [],
    recordToEdit: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          habits: [
            ...state.habits,
            { ...action.payload, id: state.habits.length + 1 },
          ],
        };

      case "DELETE":
        return {
          ...state,
          habits: [
            ...state.habits.filter((habit) => habit.id !== action.payload),
          ],
        };

      case "SETFOREDIT":
        return { ...state, recordToEdit: action.payload };

      case "UPDATE":
        return {
          ...state,
          habits: state.habits.map((habit) =>
            habit.id === action.payload.id
              ? { ...habit, ...action.payload }
              : habit
          ),
          recordToEdit: null,
        };
    }
  };

  const [{ habits, recordToEdit }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addNewHabit = (habit) => {
    dispatch({ type: "ADD", payload: habit });
  };

  const deleteHabit = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const setRecordToEdit = (habit) => {
    dispatch({ type: "SETFOREDIT", payload: habit });
  };

  const updateHabit = (updatedHabit) => {
    dispatch({ type: "UPDATE", payload: updatedHabit });
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        addNewHabit,
        deleteHabit,
        setRecordToEdit,
        recordToEdit,
        updateHabit,
        datesArray,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export { HabitsProvider, HabitsContext };
