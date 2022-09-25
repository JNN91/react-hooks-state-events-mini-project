import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[data,setData]=useState(TASKS)
  const[clickedCat,setClickedCat]=useState("All")
  function handleCatClick(e){
    setClickedCat(e.target.textContent)
  }
  function onTaskFormSubmit(newData){
    setData([...data,newData])
  }
  function handleDelete(removedTask) {
    console.log(removedTask)
    setData(data=>data.filter(task => task.text !== removedTask))
  }
  const tasksAvailable=data.filter(task=>clickedCat === "All"?true:task.category===clickedCat) 
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter clickedText={clickedCat} handleCatClick={handleCatClick} categories={CATEGORIES}/>
      <NewTaskForm  onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList  handleDelete={handleDelete} tasks={tasksAvailable}/>
    </div>
  );
}

export default App;
