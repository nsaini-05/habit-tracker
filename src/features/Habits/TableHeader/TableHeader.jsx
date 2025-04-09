import styles from "./TableHeader.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeMonth } from "../../ui/DisplaySlice";

function TableHeader() {
  const { allMonths, datesArray, selectedMonth } = useSelector(
    (store) => store.displayControls
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.row}>
        <div className={styles.actions}></div>
        <div className={styles.title}>Month</div>
        <div className={styles.monthsContainer}>
          {allMonths.map((month, index) => (
            <div
              className={`${styles.monthsTitle} ${
                selectedMonth === index ? styles.activeMonth : ""
              }`}
              key={month.monthName}
              onClick={() => dispatch(changeMonth(index))}
            >
              {month.monthName}
            </div>
          ))}
        </div>
        <div className={styles.total}></div>

        <div className={styles.actions}></div>
        <div className={styles.title}>Habit</div>
        <div
          className={styles.datesContainer}
          style={{ gridTemplateColumns: `repeat(${datesArray.length}, 1fr)` }}
        >
          {datesArray.map((date) => (
            <div key={date} className={styles.box}>
              {date}
            </div>
          ))}
        </div>
        <div className={styles.total}>Total</div>
      </div>
    </>
  );
}

export default TableHeader;
