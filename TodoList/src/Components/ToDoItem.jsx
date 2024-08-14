import React,{useState} from "react";
function ToDoItem({ toDo, todo, setTodo })
{
    const [isEditing, setIsEditing] = useState(false)
    const[editedText,setEditedText]=useState(toDo.text)
    const deleteTodo = () => {

        console.log('deleting')
        
    setTodo(todo.filter((item) => item.id !== toDo.id));
    };
    function handleCheck(e)
    {
        e.target.parentNode.classList.toggle('done')
    }

    const saveEdit = () => {
        if (editedText.trim() !== '')
        {
            setTodo(todo.map((item) => item.id === toDo.id ? { ...item, text: editedText } : item))
            
            setIsEditing(false);
        }
        else
        {
            // alert("cannot be empty")
            }
    }
    

    return (<>{isEditing ? (<div>
        <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} placeholder="Enter Some Text  (=ʘᆽʘ=)∫"/>
        <button onClick={saveEdit}>Save</button>
    </div>)
        :
        (<><span> {toDo.text}
               {/* <p>{toDo.id}</p>  */}
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={(event)=>{handleCheck(event)}}>check</button>
        </span>
        <br /></>)}
     
        
    </>)
}

export default ToDoItem

//toDo single task
// todo array of task