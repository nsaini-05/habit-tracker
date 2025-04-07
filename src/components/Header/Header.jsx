// eslint-disable-next-line no-unused-vars
import styles from "./Header.module.css";
import { useCallback } from "react";
function Header() {
  const getMonthsArray = useCallback(() => {
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
  }, []);

  const months = getMonthsArray();
  const selectedMonth = months[1];
  const datesArray = Array.from(
    { length: selectedMonth.numberOfDays },
    (_, i) => i + 1
  );

  return (
    <div>
      <div className="row">
        <div className="actions"></div>
        <div className="title">Month</div>
        <div className="monthsContainer">
          {months.map((month) => (
            <div key={month} className="monthsTitle">
              {month.monthName}
            </div>
          ))}
        </div>
        <div className="total"></div>
      </div>
      <div className="row ">
        <div className="actions"></div>
        <div className="title">Habit</div>
        <div
          className="datesContainer"
          style={{ gridTemplateColumns: `repeat(${datesArray.length}, 1fr)` }}
        >
          {datesArray.map((date) => (
            <div key={date} className="box">
              {date}
            </div>
          ))}
        </div>
        <div className="total">Total</div>
      </div>
    </div>
  );
}

export default Header;
