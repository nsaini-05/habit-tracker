import { createSlice } from "@reduxjs/toolkit";

const getMonthsArray = () => {
  const year = new Date().getFullYear();
  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const months = [
    { monthName: "Jan", numberOfDays: 31 },
    { monthName: "Feb", numberOfDays: isLeapYear(year) ? 29 : 28 },
    { monthName: "Mar", numberOfDays: 31 },
    { monthName: "Apr", numberOfDays: 30 },
    { monthName: "May", numberOfDays: 31 },
    { monthName: "Jun", numberOfDays: 30 },
    { monthName: "Jul", numberOfDays: 31 },
    { monthName: "Aug", numberOfDays: 31 },
    { monthName: "Sep", numberOfDays: 30 },
    { monthName: "Oct", numberOfDays: 31 },
    { monthName: "Nov", numberOfDays: 30 },
    { monthName: "Dec", numberOfDays: 31 },
  ];

  return months;
};

const months = getMonthsArray();
const date = new Date();
const selectedMonth = date.getMonth();

const datesArray = Array.from(
  { length: months[selectedMonth].numberOfDays },
  (_, i) => i + 1
);

export const initialState = {
  allMonths: months,
  selectedMonth: selectedMonth,
  datesArray: datesArray,
  showSideBar: true,
};

export const DisplaySlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeMonth: (state, action) => {
      console.log(action.payload);
      state.selectedMonth = action.payload;
      state.datesArray = Array.from(
        { length: state.allMonths[action.payload].numberOfDays },
        (_, i) => i + 1
      );
    },
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export default DisplaySlice.reducer;

export const { changeMonth, toggleSideBar } = DisplaySlice.actions;
