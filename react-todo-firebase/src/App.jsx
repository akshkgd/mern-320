import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // displayTask();
  const [count, setCount] = useState(0)
  const taskInput = useRef();
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [todos, setTodos] = useState([])
  function addTaskhandler(){
    setLoaderStatus(true)
    let title = taskInput.current.value;
    let todoData = {
      title: title,
    }
    fetch('https://mern-320-default-rtdb.firebaseio.com/todos.json', {
      method: 'POST',
      body: JSON.stringify(todoData)
    }).then(()=>{
      setLoaderStatus(false);
      
    })
  }

  function displayTask(){
    fetch('https://mern-320-default-rtdb.firebaseio.com/todos.json').then((data)=>{
      return data.json()
    }).then((data)=>{
     console.log(data)
     for(let key in data){
      let todo = {
        id: key,
        ...data[key]
      }
      setTodos([...todos, todo])
     }
     console.log(todos)
    })
  }
  return (
    <>
      <h2>Manage your task in one place</h2>
      <div className="flex">
      <input ref={taskInput} type="text" placeholder='Enter the task' />
      <button className="btn" onClick={addTaskhandler}>
        <div>Add Task</div>
        <div className={loaderStatus== true? "loader": ""}></div>
      </button>
      </div>
    </>
  )
}

export default App
