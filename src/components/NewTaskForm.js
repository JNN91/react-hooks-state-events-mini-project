import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const[text, setText]= useState('')
  const [category, setCategory] = useState('code')

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({text, category})
    setText('')
    setCategory('code')
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(event)=> setText(
          event.target.value
        )}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
          {categories.map((category)=>(
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm
