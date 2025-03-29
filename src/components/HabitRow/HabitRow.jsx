import styles from "./HabitRow.module.css";
const boxesArray = Array.from({ length: 31 });

function HabitRow() {
  return (
    <div className="row">
      <div className="title">Habit</div>
      <div className="datesContainer">
        {boxesArray.map((_, index) => (
          <div
            type="checkbox"
            key={index}
            className={`box ${styles.checkbox}`}
          ></div>
        ))}
      </div>
      {/* <div className={styles.total}>Total</div> */}
    </div>
  );
}

export default HabitRow;
