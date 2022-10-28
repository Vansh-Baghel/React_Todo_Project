import Card from "../UI/Card"

const AppendTodo = (props) => {

    const indexCondition = props.todo.index.at(-1) === undefined ? 0 : props.todo.index.at(-1) + 1;

    const onDeleteHandler = () => {
        props.onDeleteFromAppendTodo(indexCondition);
    }
    // console.log(props.todo.index.at(-1));

    // const onDeleteHandler = props.index;

    return (
        <Card>
            <label> Todo {props.todo.length} </label>
            <div> {indexCondition} </div>
            <button onClick={onDeleteHandler}> Delete Todo </button>
        </Card>
    )
}

export default AppendTodo;