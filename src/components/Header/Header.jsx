// eslint-disable-next-line no-unused-vars
import styles from "./Header.module.css";
function Header() {
  const boxesArray = Array.from({ length: 31 });
  return (
    <div>
      <div className="row">
        <div className="actions"></div>
        <div className="title">Habit</div>
        <div className="datesContainer">
          {boxesArray.map((_, index) => (
            <div key={index} className="box">
              {index + 1}
            </div>
          ))}
        </div>
        <div className="total">Total</div>
      </div>
    </div>
  );
}

export default Header;
