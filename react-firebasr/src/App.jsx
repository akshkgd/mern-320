import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [alertStatus, setAlertStatus] = useState(false)
  const taskInput = useRef();

  function addTaskHandeler(){
    let currentTask = {
      title: taskInput.current.value,
    }
    // submit this value to firebase
    fetch('https://mern-320-default-rtdb.firebaseio.com/todos.json', {
      method: 'POST',
      body: JSON.stringify(currentTask)
    }).then(()=>{
      setAlertStatus(true)
    })
  }

  function closeAlertHandler(){
    setAlertStatus(false)
  }
  return (
    <>

      <div className="container">
        <div className={alertStatus == true ? "alert": "d-none"}> <div>Task Added!</div> 
        <button className="close-btn" onClick={closeAlertHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 24">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></button>
        </div>
        <h2 className='title'>Manage your task in one place, @ashish</h2>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, obcaecati.</p>


        <input ref={taskInput} type="text" placeholder='Create Task' />
        <button className="btn" onClick={addTaskHandeler}>Add new Task</button>
      </div>
    </>
  )
}

export default App
