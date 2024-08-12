import { useState } from "react";
function Header({ todo, setTodo }) {
    const[input,setInput]=useState('')
    function addTodo() {
        if (input.trim() !== '')
        {       console.log('todoItem',todo)
            setTodo([...todo, { id: Date.now(), text: input, completed: false }])
            setInput('');
        }
    }
    return (<>
        <h3> Heyy I am header</h3>
<<<<<<< HEAD
         <div className="input-wrapper">
            <input type="text" placeholder="Add a new Task" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
=======
>>>>>>> 34016479e9011068f715b27bdc59ec1a745e1ff5
    </>)
}

export  default Header 