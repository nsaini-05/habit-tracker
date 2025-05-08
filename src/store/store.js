import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "../features/Habits/HabitsSlice";
import displayReducer from "../features/ui/DisplaySlice";
import CounterReducer from "../store/CounterSlice";
const store = configureStore({
  reducer: {
    habits: habitsReducer,
    displayControls: displayReducer,
    numbers: CounterReducer,
  },
});

export default store;
