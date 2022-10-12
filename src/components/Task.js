
import React from "react";


function Task({text, category, deleteTask}) {
  function handleClick(){
    deleteTask(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task
