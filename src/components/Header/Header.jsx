import styles from "./Header.module.css";
function Header() {
  const boxesArray = Array.from({ length: 31 });

  return (
    <div>
      <div className="row">
        <div className="title">Habit</div>
        <div className="datesContainer">
          {boxesArray.map((_, index) => (
            <div key={index} className="box">
              {index + 1}
            </div>
          ))}
        </div>
        <div className={styles.total}>Total</div>
      </div>
    </div>
  );
}

export default Header;
