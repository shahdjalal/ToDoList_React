import React from "react";
import { CiBoxList } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import style from "./TaskInput.module.css";
import { FaCheck } from "react-icons/fa6";

export default function TaskForm({
  addTask,
  darkMode,
  editText,
  setEditText,
  editIndex,
  saveEdit,
}) { 

  const handleAdd = () => {
    if (!editText.trim()) return;
    if (editIndex !== null) {
      saveEdit();
    } else {
      addTask(editText);
      setEditText("");
    }
  };

  return (
    <header className="header" id="task-form">
      <div className="container">
        <p className={style.typewriter}>
          <CiBoxList className={style.taskIcon} /> What do you want to achieve
          today ...
        </p>
        <div className={style.taskBox}>
          <input
            type="text"
            placeholder="Add your task . . ."
            name="task"
            className={style.taskInput}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className={`${style.addBtn} ${darkMode ? style.dark : ""}`}
            onClick={handleAdd}
          >
            {editIndex !== null ? (
              <>
                Save
                <FaCheck />
              </>
            ) : (
              <>
                ADD <IoMdAdd />
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
