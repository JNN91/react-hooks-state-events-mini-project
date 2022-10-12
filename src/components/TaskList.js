import React from "react";

import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) =>(
        <Task text={task.text} deleteTask={deleteTask} category={task.category} key={task.text}/>
      ))}
    </div>
  );
}

export default TaskList;
