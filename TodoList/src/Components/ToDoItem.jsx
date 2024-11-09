import React,{useState} from "react";
function ToDoItem({ toDo, todo, setTodo })
{
    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(toDo.text)
    const [error, setError] = useState('');
    const deleteTodo = () => {

        // console.log('deleting')
        
    setTodo(todo.filter((item) => item.id !== toDo.id));
    };
    function handleCheck(e)
    {
        // console.log(e.target.parentNode.parentNode.childNodes[1].childNodes[0])
        // e.target.parentNode.classList.toggle('done')
        if (e.target.parentNode.parentNode.childNodes[1].childNodes[2].innerText == 'Done')
        {
            e.target.parentNode.parentNode.childNodes[1].childNodes[2].innerText = 'Undone'
            e.target.parentNode.parentNode.childNodes[1].childNodes[0].disabled=true
            
        }
        else {
            e.target.parentNode.parentNode.childNodes[1].childNodes[2].innerText = 'Done'
            e.target.parentNode.parentNode.childNodes[1].childNodes[0].disabled=false
        }

        e.target.parentNode.parentNode.childNodes[0].classList.toggle('done')
     
    }

    const saveEdit = () => {
        if (editedText.trim() !== '')
        {   setError('');
            setTodo(todo.map((item) => item.id === toDo.id ? { ...item, text: editedText } : item))
            
            setIsEditing(false);
        }
        else
        {
            setError('Unable to save an empty Edited task');
            return;
            }
    }
   

    return (<>{isEditing ? (<div>
        <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} placeholder="Enter Some Text  (=ʘᆽʘ=)∫" onFocus={()=>setError('')}/>
        <button onClick={saveEdit} className="save-button">Save</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>)
        :
        (<div className="todo-item"><div className="todo-text"> 
            <span>{toDo.text} </span> </div>
            <div className="button-wrapper">
                <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
            <button onClick={deleteTodo} className="delete-button">Delete</button>
                <button onClick={(event) => { handleCheck(event) }} className="check-button">Done</button>
            </div>
           
           
       
        <br /></div>)}
     
        
    </>)
}

export default ToDoItem

//toDo single task
// todo array of task