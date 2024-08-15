import { useState } from "react";
function Header({ todo, setTodo }) {
    const [input, setInput] = useState('')
    const [error, setError] = useState('');
    function addTodo() {
        if (input.trim() !== '')
        {
            console.log('todoItem', todo)
            setError('');
            setTodo([{ id: Date.now(), text: input, completed: false },...todo])
            setInput('');
        }
        else
        {
            setError('Unable to add an empty task');
            return;
            }
    }
    return (<>
        <h3> Hey I am TodoList 👋 </h3>
         <div className="header-container">
            <input type="text"  className="input-field" placeholder="Add a new Task ( ^_^ )" value={input} onChange={(e)=>setInput(e.target.value)} onFocus={()=>setError('')}/>
            <button onClick={addTodo} className="add-button">Add</button>
            {error && <p style={{ color: 'red' }} >{error}</p>}
        </div>
    </>)
}

export  default Header 