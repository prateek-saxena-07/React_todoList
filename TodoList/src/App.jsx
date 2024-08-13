import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'
import { useState } from 'react'

function App() {

const[todo,setTodo]=useState([])
  return (
    <>
      <Header todo={todo} setTodo={setTodo}></Header>  
      <ToDoList todo={todo} setTodo={setTodo} ></ToDoList>
      
    </>
  )
}

export default App
