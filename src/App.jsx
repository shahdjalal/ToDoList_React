import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";


import TaskForm from "./Components/TaskInput/TaskForm";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Components/context/ThemeContext";
import TaskList from "./Components/TaskInput/TaskList";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editIndex,setEditIndex] = useState(null);
    const [editText,setEditText] = useState("");

  // to check if has data
  useEffect(() => {
    const savedTasks = localStorage.getItem("toDo_tasks");
    if (savedTasks) {
      setData(JSON.parse(savedTasks));
    } else {
      localStorage.setItem("toDo_tasks", JSON.stringify([]));
    }
  }, []);

  //add new task
  const addTask = (text) => {
    const newTask = { text: text, complete: false };
    const updatedTasks = [...data, newTask];
    setData(updatedTasks);
    localStorage.setItem("toDo_tasks", JSON.stringify(updatedTasks));
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

  
//edit

const startEdit =(index) =>{
  setEditIndex(index);
  setEditText(data[index].text)
    window.location.href = "#task-form";
};

const saveEdit=()=>{
  if(editIndex === null) return;
  const updated =[...data];
  updated[editIndex].text = editText;
setData(updated);
  localStorage.setItem("toDo_tasks", JSON.stringify(updated));
  setEditIndex(null);
  setEditText("")
     window.location.href = "#all-tasks";
}

  return (
    <>
      <Navbar />

      <TaskForm addTask={addTask} darkMode={darkMode} editText={editText} setEditText={setEditText} editIndex={editIndex} saveEdit={saveEdit}/>
      <TaskList
        tasks={data}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        deleteCompleted={deleteCompleted}
        filter={filter}
        setFilter={setFilter}
        startEdit={startEdit}
      />

      <Footer />
    </>
  );
}

export default App;
