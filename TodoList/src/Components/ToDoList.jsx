import ToDoItem from "./ToDoItem"
function ToDoList({todo,setTodo})
{
   
    return (<div className="todolist">
        {
            todo.map((toDo)=>(<ToDoItem key={toDo.id} toDo={toDo} todo={todo} setTodo={setTodo} ></ToDoItem>))
        }
    </div>)
}




export default ToDoList

//toDo single task
// todo array of task
//key prop is not passed to its children components it is used for internal optimization when the list is modified