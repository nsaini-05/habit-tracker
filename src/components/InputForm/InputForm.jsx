import { useContext, useEffect, useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HabitsContext } from "../../contexts/HabitsContext";
import { VscDiscard } from "react-icons/vsc";
import { FaSave } from "react-icons/fa";
import styles from "./InputForm.module.css";

function InputForm() {
  const {
    addNewHabit,
    recordToEdit,
    setRecordToEdit,
    updateHabit,
    quote,
    author,
    habits,
  } = useContext(HabitsContext);

  const [inputText, setInputText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    setInputText(recordToEdit ? recordToEdit.name : "");
  }, [recordToEdit]);

  const handleAdd = () => {
    if (!inputText) return;
    addNewHabit({ name: inputText, dates: [] });
    setInputText("");
  };

  const handleUpdate = () => {
    updateHabit({ ...recordToEdit, name: inputText });
  };

  const hanldeDiscard = () => {
    setRecordToEdit(null);
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    if (recordToEdit) {
      handleUpdate;
    } else {
      handleAdd();
    }
  };

  useEffect(() => {
    if (habits.length === 0) {
      inputRef.current.focus();
    }
  }, [habits]);

  return (
    <>
      {quote && (
        <blockquote className={styles.quote}>
          &ldquo;{quote}&rdquo; &mdash; <footer>{author}</footer>
        </blockquote>
      )}

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.textInput}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          placeholder="Enter New Habit"
          ref={inputRef}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        {!recordToEdit && (
          <button
            type="submit"
            className="primary"
            disabled={inputText === ""}
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
              disabled={inputText === recordToEdit.name || inputText === ""}
              onClick={handleUpdate}
            >
              <FaSave />
              Save
            </button>
          </div>
        )}
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
    </>
  );
}

export default InputForm;
