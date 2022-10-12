import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState('All')

  function handleDelete(taskToDelete){
    setTask(tasks.filter((task)=> task.text !==taskToDelete))
  }

  const visibleTasks = tasks.filter((task) => (
    category ==='All'|| task.category === category
  ))

  function handleAddTask(newTask) {
    setTask([...tasks, newTask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <div></div>
      <NewTaskForm categories={CATEGORIES.filter((category)=> category !== 'ALL')} onTaskFormSubmit={handleAddTask}/>

      <TaskList deleteTask={handleDelete} tasks={visibleTasks}/>
    </div>
  );
}

export default App;