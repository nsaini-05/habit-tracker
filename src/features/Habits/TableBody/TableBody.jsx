import { useSelector } from "react-redux";
import { useEffect } from "react";
import HabitRow from "../HabitRow/HabitRow";
import styles from "./TableBody.module.css";
function TableBody() {
  const { habitsList } = useSelector((store) => store.habits);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habitsList));
  }, [habitsList]);

  return (
    <>
      {habitsList.length > 0 && (
        <div className={styles.habitsContainer}>
          {habitsList.map((habit) => {
            return <HabitRow habitData={habit} key={habit.id} />;
          })}
        </div>
      )}
    </>
  );
}

export default TableBody;
