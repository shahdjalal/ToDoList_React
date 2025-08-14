import React from 'react'

export default function Tasks() {
  return (
  <section className="all-tasks" id="all-tasks">
  <div className="container">
    <div className="title">
      <h2><i className="fa-solid fa-list-check" /> all tasks</h2>
      <div className="tasksButtons">
        {/* <div className="dropdown">
          <button className="dropbtn" />
          <div className="dropdown-content">
            <a className="show-completed">completed </a>
            <a className="show-notCompleted">not-Completed</a>
            <a className="show-all">all</a>
          </div>
        </div> */}
        <button id="deleteCompletedBtn">
          <i className="fa-solid fa-trash" /> delete Completed tasks
        </button>
      </div>
    </div>
    <div className="task-list row" />
  </div>
</section>

  )
}
