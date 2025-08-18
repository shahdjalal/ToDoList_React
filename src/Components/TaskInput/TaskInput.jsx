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
export default function TaskInput() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // to check if has data
  useEffect(() => {
    const savedTasks = localStorage.getItem("toDo_tasks");
    if (savedTasks) {
      setData(JSON.parse(savedTasks));
    } else {
      localStorage.setItem("toDo_tasks", JSON.stringify([]));
    }
  }, []);

  // add new task
  const addNewTask = () => {
    const newTask = { text: input, complete: false };
    const updatedTasks = [...data, newTask];
    setData(updatedTasks);
    localStorage.setItem("toDo_tasks", JSON.stringify(updatedTasks));
    setInput("");
    window.location.href = "#all-tasks";
  };

  // cmpletetd tasks
  const toggleComplete = (index) => {
    const updatedlist = [...data];
    updatedlist[index].complete = !updatedlist[index].complete;
    setData(updatedlist);
    localStorage.setItem("toDo_tasks", JSON.stringify(updatedlist));
  };

  //delete task
  const deleteTask = (index) => {
    const updatedlist = [...data];
    updatedlist.splice(index, 1);
    setData(updatedlist);
    localStorage.setItem("toDo_tasks", JSON.stringify(updatedlist));
  };
  // delete completed
  const deleteCompleted = () => {
    const remainingTasks = data.filter((task) => !task.complete);
    setData(remainingTasks);
    localStorage.setItem("toDo_tasks", JSON.stringify(remainingTasks));
  };

  //filter
  const filteredTasks = data.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.complete;
    if (filter === "notCompleted") return !task.complete;
  });

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
              onClick={() => {
                addNewTask();
              }}
            >
              ADD <IoMdAdd />
            </button>
          </div>
        </div>
      </header>

      {/* display */}

      <div className="allTasks" id="all-tasks">
        <div className="container">
          <div className={style.title}>
            <h2>
              <MdOutlineChecklist /> all tasks
            </h2>
            <div className={style.tasksButtons}>
              <select
                className={style.filterSelect}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Tasks</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
              </select>

              <button
                className={style.deleteCompletedBtn}
                onClick={() => deleteCompleted()}
              >
                <MdOutlineDeleteForever title="Delete task" /> delete Completed
                tasks
              </button>
            </div>
          </div>

          <div />
          {filteredTasks.length > 0 ? (
            <div className="row">
              {filteredTasks.map((task, index) => (
                <div className={style.task} key={index}>
                  <div className="row">
                    <button
                      onClick={() => toggleComplete(index)}
                      aria-label={
                        task.complete
                          ? "Mark as incomplete"
                          : "Mark as complete"
                      }
                      className={style.checkIcon}
                    >
                      {task.complete ? (
                        <MdCheckBox />
                      ) : (
                        <MdOutlineCheckBoxOutlineBlank />
                      )}
                    </button>
                    <span
                      className={` ${
                        task.complete ? `${style.completedTask}` : ""
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <button
                    className={style.delete}
                    onClick={() => deleteTask(index)}
                    key={index}
                  >
                    <MdDeleteForever title="Delete task" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>Add New Task To Do</p>
          )}
        </div>
      </div>
    </>
  );
}
