import Todos from "./components/Todos";
import classes from "./components/Todo_Form.module.css"
import { useRef, useState } from "react";

function App() {
  const [todos , setTodo] = useState([]);
  const todoText = useRef();
  
  // onSubmit pe hee nhi hona chahiye ye sirf , warna it will not be deleted instantly.
  const popTodo = (todosIndex) => {
    todos.splice(todosIndex , 1);
    setTodo(prevTodos => {return [...prevTodos]});
    console.log(todos);
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const todoInputVal = todoText.current.value 

    // Checking for empty input
    if (todoInputVal.trim() === '') return; 

    const index = todos.map((_,index) => {
      return index;
    })

    setTodo(prevTodos => {
      return [...prevTodos , {
      id : todos.length,
      name : todoInputVal,
      length : todos.length + 1,
      index : index,
    }]})

    todoText.current.value = null;
}

  return (
    <div>
      <form className={classes.form} onSubmit={onFormSubmitHandler}>
        <div className={classes.inputDiv}>
          <label htmlFor="task"> Write a task </label>
          <input
            id="task"
            type="text"
            className={classes.inputField}
            ref={todoText}
          />
        </div>
        <div>
          <button> Add task </button>
        </div>
      </form>
      <Todos todos={todos} deleteTodo={popTodo} />
    </div>
  );
}

export default App;
