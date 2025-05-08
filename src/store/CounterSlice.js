import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 10,
};

export const CounterSlice = createSlice({
  name: "counter-2",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.counterValue += 1;
    },
  },
});

export default CounterSlice.reducer;

export const { increment } = CounterSlice.actions;
