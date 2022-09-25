import React from "react";

function NewTaskForm({categories, onTaskSubmitForm}) {
  const [catSelected,setCatSelected]=useState("Code")
  const [inputData, setInputData]=useState("")

  function handleOptionSelected(e){
    setCatSelected(e.target.value)
  }
  function handleInput(e){
    setInputData(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({text:inputData, category:catSelected})
  }
 const optionList= categories.filter(cat=>cat!=="All").map((cat,index)=>{
    return <option key={index}>{cat}</option>
  })
  return (
    <form className="new-task-form">
      <form onSubmit={handleSubmit}  className="new-task-form"></form>
      <label>
        Details
        <input type="text" name="text" />
        <input onChange={handleInput} type="text" name="text"></input>
      </label>
      <label>
        Category
        <select name="category">
        <select onChange={handleOptionSelected} name="category"></select>
          {optionList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
