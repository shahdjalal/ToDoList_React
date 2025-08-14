import React from 'react'
import { CiBoxList } from 'react-icons/ci'
import style from './TaskInput.module.css'
import { IoMdAdd } from 'react-icons/io'
export default function TaskInput() {
  return (
    
    <header className="header">
  <div className="container">
    <p className={style.typewriter}>
     <CiBoxList className={style.taskIcon} /> What do you want to achieve
      today ...
    </p>
    <div className={style.taskBox}>
      <input type="text" placeholder="Add your task . . ." name="task" className={style.taskInput} />
      <button className={style.addBtn}>ADD <IoMdAdd  /></button>
    </div>
  </div>
</header>

  )
}
