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
         <div className="input-wrapper">
            <input type="text" placeholder="Add a new Task" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    </>)
}

export  default Header 