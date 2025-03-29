import { useContext, useState } from "react";
import styles from "./InputForm.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HabitsContext } from "../../contexts/HabitsContext";
function InputForm() {
  // eslint-disable-next-line no-unused-vars
  const { habits, setHabits } = useContext(HabitsContext);
  const [inputText, setInputText] = useState("");

  const onSubmit = () => {
    setHabits((habits) => [
      ...habits,
      { name: inputText, id: habits.length + 1, dates: [] },
    ]);
    setInputText("");
  };
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.textInput}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Enter New Habit"
      ></input>
      <button
        type="submit"
        className={styles.primary}
        disabled={inputText === ""}
        onClick={onSubmit}
      >
        <IoMdAddCircleOutline />
        Add Habit
      </button>
    </div>
  );
}

export default InputForm;
