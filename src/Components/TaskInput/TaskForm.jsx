import React, { useContext, useEffect, useState } from "react";
import { CiBoxList } from "react-icons/ci";
import style from "./TaskInput.module.css";
import { IoMdAdd } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import {
  MdCheckBox,
  MdDeleteForever,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineChecklist,
  MdOutlineDeleteForever,
} from "react-icons/md";
import { FaEdit } from "react-icons/fa";
export default function TaskForm({addTask,darkMode}) {
  
 
  const [input, setInput] = useState("");




  // add new task
  const handleAddTask = () => {
 if(!input.trim())return;

    addTask(input)
    setInput("");
    window.location.href = "#all-tasks";
  };


  return (
    <>
      {/* input */}

      <header className="header">
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
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              className={`${style.addBtn} ${darkMode ? style.dark : ""}`}
              onClick={
                handleAddTask
              }
            >
              ADD <IoMdAdd />
            </button>
          </div>
        </div>
      </header>

    
    </>
  );
}
