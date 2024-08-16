import { useState } from "react";
import reactLogo from '../assets/react.svg'
import no from '../assets/no.png'

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
        <h3> 👋 I am <img src={reactLogo} alt="" height="15px" width="20px"/> TodoList  </h3>
         <div className="header-container">
            <input type="text"  className="input-field" placeholder="Add a new Task ( ^_^ )" value={input} onChange={(e)=>setInput(e.target.value)} onFocus={()=>setError('')}/>
            <button onClick={addTodo} className="add-button">Add</button>
            {error && <p style={{ color: 'red'}} >Noooooooo<img src={no} alt="" height="30px" width="35px" style={{padding:'0px' ,margin:'0px'}}/></p>}
        </div>
    </>)
}

export  default Header 