import ToDoItem from "./ToDoItem"
function ToDoList({todo,setTodo})
{
    return (<>
        {
            todo.map((toDo)=>(<ToDoItem key={toDo.id} toDo={toDo} todo={todo} setTodo={setTodo} ></ToDoItem>))
        }
    </>)
}

export default ToDoList