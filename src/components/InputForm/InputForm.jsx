import { useContext, useEffect, useState } from "react";
import styles from "./InputForm.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HabitsContext } from "../../contexts/HabitsContext";
import { VscDiscard } from "react-icons/vsc";
import { FaSave } from "react-icons/fa";

function InputForm() {
  // eslint-disable-next-line no-unused-vars
  const { habits, setHabits, updateHabit, setUpdateHabit } =
    useContext(HabitsContext);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInputText(updateHabit ? updateHabit.name : "");
  }, [updateHabit]);

  const onSubmit = () => {
    setHabits((habits) => [
      ...habits,
      { name: inputText, id: habits.length + 1, dates: [] },
    ]);
    setInputText("");
  };

  const handleUpdate = () => {
    setHabits((habits) => {
      return habits.map((habit) =>
        habit.id === updateHabit.id ? { ...habit, name: inputText } : habit
      );
    });
    setUpdateHabit(null);
  };

  const hanldeDiscard = () => {
    setUpdateHabit(null);
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
      {!updateHabit && (
        <button
          type="submit"
          className="primary"
          disabled={inputText === ""}
          onClick={onSubmit}
        >
          <IoMdAddCircleOutline />
          Add Habit
        </button>
      )}
      {updateHabit && (
        <div className={styles.buttonsContainer}>
          <button
            type="submit"
            className="primary"
            disabled={inputText === updateHabit.name}
            onClick={handleUpdate}
          >
            <FaSave />
            Save
          </button>
          <button
            type="submit"
            disabled={inputText === ""}
            onClick={hanldeDiscard}
            className="primary"
          >
            <VscDiscard />
            Discard
          </button>
        </div>
      )}
    </div>
  );
}

export default InputForm;
