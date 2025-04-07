import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./features/Habits/HabitsSlice";
import displayReducer from "./features/ui/DisplaySlice";
const store = configureStore({
  reducer: {
    habits: habitsReducer,
    displayControls: displayReducer,
  },
});

export default store;
