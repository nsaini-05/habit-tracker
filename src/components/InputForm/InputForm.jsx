import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addHabit,
  updateHabit,
  setRecordToEdit,
} from "../../features/Habits/HabitsSlice";
import styles from "./InputForm.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VscDiscard } from "react-icons/vsc";
import { FaSave } from "react-icons/fa";

function InputForm() {
  const dispatch = useDispatch();
  const { recordToEdit, habitsList } = useSelector((store) => store.habits);
  const [habitName, setHabitName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    setHabitName(recordToEdit ? recordToEdit.name : "");
  }, [recordToEdit]);

  useEffect(() => {
    if (habitsList.length === 0) {
      inputRef.current?.focus();
    }
  }, [habitsList]);

  const handleAdd = () => {
    if (habitName.trim().length === 0) return;
    dispatch(addHabit({ name: habitName, dates: [], id: habitsList.length }));
    setHabitName("");
    inputRef.current?.focus();
  };

  const handleUpdate = () => {
    if (habitName.trim().length === 0) return;
    dispatch(updateHabit({ ...recordToEdit, name: habitName }));
    setHabitName("");
    dispatch(setRecordToEdit(null));
    inputRef.current?.focus();
  };

  const handleDiscard = () => {
    dispatch(setRecordToEdit(null));
    setHabitName("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    if (recordToEdit) {
      handleUpdate();
    } else {
      handleAdd();
    }
  };

  const isDuplicateName =
    habitName.trim() === "" ||
    (recordToEdit && habitName.trim() === recordToEdit.name);

  return (
    <>
      {/* {quote && (
        <blockquote className={styles.quote}>
          &ldquo;{quote}&rdquo; &mdash; <footer>{author}</footer>
        </blockquote>
      )} */}

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.textInput}
          value={habitName}
          onChange={(e) => {
            setHabitName(e.target.value);
          }}
          placeholder="Enter New Habit"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        ></input>
        {!recordToEdit && (
          <button
            type="submit"
            className="primary"
            disabled={habitName.trim() === ""}
            onClick={handleAdd}
          >
            <IoMdAddCircleOutline />
            Add
          </button>
        )}
        {recordToEdit && (
          <div className={styles.buttonsContainer}>
            <button
              type="submit"
              className="primary"
              disabled={isDuplicateName}
              onClick={handleUpdate}
            >
              <FaSave />
              Save
            </button>
          </div>
        )}
        <button
          type="submit"
          disabled={habitName === ""}
          onClick={handleDiscard}
          className="primary"
        >
          <VscDiscard />
          Discard
        </button>
      </div>
    </>
  );
}

export default InputForm;
