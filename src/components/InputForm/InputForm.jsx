import { useContext, useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HabitsContext } from "../../contexts/HabitsContext";
import { VscDiscard } from "react-icons/vsc";
import { FaSave } from "react-icons/fa";
import styles from "./InputForm.module.css";

function InputForm() {
  const { addNewHabit, recordToEdit, setRecordToEdit, updateHabit } =
    useContext(HabitsContext);

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInputText(recordToEdit ? recordToEdit.name : "");
  }, [recordToEdit]);

  const handleAdd = () => {
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

  return (
    <>
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
              disabled={inputText === recordToEdit.name}
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
