import { useSelector } from "react-redux";
import { useEffect } from "react";
import HabitRow from "../HabitRow/HabitRow";
function Habits() {
  const { habitsList } = useSelector((store) => store.habits);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habitsList));
  }, [habitsList]);

  return (
    <div>
      {habitsList.length > 0 && (
        <div className="habitsContainer">
          {habitsList.map((habit) => {
            return <HabitRow habitData={habit} key={habit.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Habits;
