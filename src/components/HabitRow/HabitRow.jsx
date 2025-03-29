import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";

const boxesArray = Array.from({ length: 31 });

function HabitRow({ habitData, setHabits }) {
  const hanldeOnClick = (id, index) => {
    const newDate = index + 1;
    setHabits((habits) => {
      return habits.map((item) =>
        item.id === id
          ? {
              ...item,
              dates: item.dates.includes(newDate)
                ? item.dates.filter((date) => date != newDate)
                : [...item.dates, newDate],
            }
          : item
      );
    });
  };
  return (
    <div className="row">
      <div className="title">{habitData.name}</div>
      <div className="datesContainer">
        {boxesArray.map((_, index) => (
          <div
            type="checkbox"
            key={index}
            className={`box ${styles.checkbox}`}
            onClick={() => hanldeOnClick(habitData.id, index)}
          >
            {habitData.dates.includes(index + 1) ? <IoMdCheckmark /> : ""}
          </div>
        ))}
      </div>
      {/* {habitData.dates.length > 0 && (
        <div className="total">{habitData.dates.length}</div>
      )} */}
      <div className="total">{habitData.dates.length}</div>
    </div>
  );
}

export default HabitRow;
