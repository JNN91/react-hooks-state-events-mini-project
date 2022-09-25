import React from "react";
import Task from "./Task"

function TaskList({task,handleDelete}) {
  console.log (task)
  const taskList = task.map((task) => {
    return <Task 
    className={"task"} 
    handleDelete={handleDelete} text={task.text} 
    category={task.category} key={task.text} />
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
