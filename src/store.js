import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./features/Habits/HabitsSlice";

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
