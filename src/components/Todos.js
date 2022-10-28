import AppendTodo from "./Append_Todos";

const Todos = (props) => {
  
  // props.deleteTodo is the name of attribute given to this component in App.js. We are passing the index number.
  const gimmeIndex = (data) => {props.deleteTodo(data)};

  return props.todos.map((todo) => {
    return (
      <>
      {/* name of attribute can be anything , it doesn't necessarily mean that we have to use name of function used in AppendTodo to delete the note. 
      Just make sure to use onDeleteFromAppendTodo name in Append_Todos with props like props.onDeleteFromAppendTodo() .  */}
      <AppendTodo key={todo.id} todo={todo} index={todo.index} onDeleteFromAppendTodo={gimmeIndex}/>
      </>
      )
  });
};

export default Todos;
