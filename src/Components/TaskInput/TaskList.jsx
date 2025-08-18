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
export default function TaskList({
  tasks,
  toggleComplete,
  deleteTask,
  deleteCompleted,
  filter,
  setFilter,
  startEdit
}) {

  //filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.complete;
    if (filter === "notCompleted") return !task.complete;
  });

  return (
    <>
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
                  <div>
                    <button
                      className={style.edit}
                      onClick={() => startEdit(index)}
                      key={index}
                    >
                      <FaEdit title="edit task" />
                    </button>
                    <button
                      className={style.delete}
                      onClick={() => deleteTask(index)}
                      key={index}
                    >
                      <MdDeleteForever title="Delete task" />
                    </button>
                  </div>
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
