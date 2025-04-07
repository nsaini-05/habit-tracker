import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteHabit,
  setRecordToEdit,
  updateHabit,
} from "../../features/Habits/HabitsSlice";
function HabitRow({ habitData }) {
  const dispatch = useDispatch();
  const datesArray = Array.from({ length: 31 }, (_, i) => i + 1);

  const toggleHabitStatus = (dateToUpdate) => {
    if (habitData.dates.includes(dateToUpdate)) {
      dispatch(
        updateHabit({
          ...habitData,
          dates: habitData.dates.filter((date) => date !== dateToUpdate),
        })
      );
    } else {
      dispatch(
        updateHabit({
          ...habitData,
          dates: [...habitData.dates, dateToUpdate],
        })
      );
    }
  };

  const hanldeDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the record ?"
    );
    if (confirm) dispatch(deleteHabit(id));
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
            onClick={() => dispatch(setRecordToEdit(habitData))}
            className="action-icon"
          />
        </button>
      </div>
      <div className={`title`}>{habitData.name} </div>
      <div className="datesContainer">
        {datesArray.map((date) => (
          <div
            type="checkbox"
            key={date}
            className={`box ${styles.checkbox}`}
            onClick={() => toggleHabitStatus(date)}
          >
            {habitData.dates.includes(date) ? (
              <IoMdCheckmark size="1.6rem" />
            ) : (
              ""
            )}
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
