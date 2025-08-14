import React, { useContext, useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import style from "./Navbar.module.css";
import { RxDropdownMenu } from "react-icons/rx";
import { FaRegRectangleList } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrollded] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrollded(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${style.navbarItems}  ${scrolled ? style.scrollNav : ""} ${darkMode ? style.dark: "" }`}>
      <div className="container">
        <div className="row">
          <div className={style.logo}>
            <FaRegRectangleList />
            To Do List
          </div>
          <div className={style.navbar}>
            <ul className="row">
              <li>
                <a href="#all-tasks"> All tasks</a>
              </li>
                 <li>
  <button
    onClick={toggleTheme}
  className={style.modeBtn} >
    {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
  </button>
  
</li>

            </ul>
          </div>
          <div className={style.dropdownNav}>
            <button className="dropNavbtn">
              <RxDropdownMenu />
            </button>
            <div className={style.dropdownContent}>
              <ul>
                <li>
                  <a href="#all-tasks"> All tasks</a>
                </li>
              <li>
  <button
    onClick={toggleTheme}
    className={darkMode ? style.darkbtn : style.lightbtn}
  >
    {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
  </button>

</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
