// eslint-disable-next-line no-unused-vars
import styles from "./Header.module.css";
import { useContext } from "react";
import { HabitsContext } from "../../contexts/HabitsContext";
function Header() {
  const { datesArray } = useContext(HabitsContext);
  return (
    <div>
      <div className="row">
        <div className="actions"></div>
        <div className="title">Habit</div>
        <div className="datesContainer">
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
