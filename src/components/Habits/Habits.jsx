import { useContext } from "react";
import { HabitsContext } from "../../contexts/HabitsContext";
import HabitRow from "../HabitRow/HabitRow";
function Habits() {
  const { habits } = useContext(HabitsContext);
  return (
    <div>
      {habits.length > 0 && (
        <div className="habitsContainer">
          {habits.map((habit) => {
            return <HabitRow habitData={habit} key={habit.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Habits;
