import React from 'react'
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';


export default function Navbar() {
  return (
     

    <nav class="navbar-items">
      <div class="container">
        <div class="row">
          <div class="logo">
            <i class="fa fa-list-alt list" aria-hidden="true"></i>
            To Do List
          </div>

          <div class="navbar">
            <ul class="row">
              <li>
                <a href="#all-tasks"> All tasks</a>
              </li>
              <li>
                <a class="dark-btn"><MdOutlineDarkMode /></a>
                <a class="light-btn"><MdOutlineLightMode /></a>
              </li>
            </ul>
          </div>
          <div class="dropdown-nav">
            <button class="dropNavbtn"><i class="fa-solid fa-bars"></i></button>
            <div class="dropdown-content">
              <ul>
                <li>
                  <a href="#all-tasks"> All tasks</a>
                </li>
                <li>
                  <a class="dark-btn"> <i class="fa-regular fa-moon"></i></a>
                  <a class="light-btn"><i class="fa-regular fa-sun"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
