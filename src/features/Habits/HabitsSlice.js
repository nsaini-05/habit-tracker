import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  habitsList: JSON.parse(localStorage.getItem("habits")) || [],
  recordToEdit: null,
};

export const habitsSlice = createSlice({
  name: "habits",
  initialState: initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habitsList.push(action.payload);
    },
    deleteHabit: (state, action) => {
      state.habitsList = state.habitsList.filter(
        (habit) => habit.id !== action.payload
      );
    },
    updateHabit: (state, action) => {
      state.habitsList = state.habitsList.map((habit) =>
        habit.id !== action.payload.id ? habit : { ...action.payload }
      );
    },
    setRecordToEdit: (state, action) => {
      state.recordToEdit = action.payload;
    },
  },
});
export const { addHabit, deleteHabit, updateHabit, setRecordToEdit } =
  habitsSlice.actions;

export default habitsSlice.reducer;
