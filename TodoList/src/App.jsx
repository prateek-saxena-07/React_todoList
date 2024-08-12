import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'
import { useState } from 'react'

function App() {

const[todo,setTodo]=useState([])
  return (
    <>
<<<<<<< HEAD
      <Header todo={todo} setTodo={setTodo}></Header>  
=======
      <Header></Header>  
      
>>>>>>> 34016479e9011068f715b27bdc59ec1a745e1ff5
      <ToDoList></ToDoList>
      
    </>
  )
}

export default App
