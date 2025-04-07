// eslint-disable-next-line no-unused-vars
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeMonth } from "../../features/ui/DisplaySlice";
function Header() {
  const { allMonths, datesArray, selectedMonth } = useSelector(
    (store) => store.displayControls
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row">
        <div className="actions"></div>
        <div className="title">Month</div>
        <div className="monthsContainer">
          {allMonths.map((month, index) => (
            <div
              className={`monthsTitle ${
                selectedMonth === index ? styles.activeMonth : ""
              }`}
              key={month.monthName}
              onClick={() => dispatch(changeMonth(index))}
            >
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
