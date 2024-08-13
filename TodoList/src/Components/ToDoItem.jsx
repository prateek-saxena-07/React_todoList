function ToDoItem({ toDo, todo, setTodo })
{
    const deleteTodo = () => {

        console.log('deleting')
        
    setTodo(todo.filter((item) => item.id !== toDo.id));
    };
    function handleCheck(e)
    {
        e.target.parentNode.classList.toggle('done')
    }
    return (<>
        {/* <p>{toDo.id}</p>  */}
        <span> {toDo.text}
            {/* <button >Edit</button> */}
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={(event)=>{handleCheck(event)}}>check</button>
        </span>
        <br />
    </>)
}

export default ToDoItem

//toDo single task
// todo array of task