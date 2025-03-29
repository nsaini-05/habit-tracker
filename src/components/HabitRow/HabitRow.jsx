import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useContext } from "react";
import { HabitsContext } from "../../contexts/HabitsContext";

const boxesArray = Array.from({ length: 31 });

function HabitRow({ habitData }) {
  const { setUpdateHabit, setHabits } = useContext(HabitsContext);

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

  const hanldeDelete = (id) => {
    setHabits((habits) => habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="row">
      <div className={styles.actionButtons}>
        <button
          className={`primary ${styles.actionButton}`}
          onClick={() => hanldeDelete(habitData.id)}
        >
          <MdDeleteOutline size="1.6rem" />
        </button>
        <button className={`primary ${styles.actionButton}`}>
          <MdOutlineEdit
            size="1.6rem"
            onClick={() => setUpdateHabit(habitData)}
            className="action-icon"
          />
        </button>
      </div>
      <div className={`title`}>{habitData.name} </div>
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
      {habitData.dates.length > 0 && (
        <div className="total">{habitData.dates.length}</div>
      )}
    </div>
  );
}

export default HabitRow;
