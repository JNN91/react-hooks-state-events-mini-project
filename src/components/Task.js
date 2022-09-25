import React from "react";

function Task({text , category ,handleDelete}) {
  function handleDeleteOnclick() {
    handleDelete (text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteOnclick} className="delete">X</button>
    </div>
  );
}

export default Task;
