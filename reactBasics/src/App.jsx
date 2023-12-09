import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let items = ['milk', 'bread', 'butter'];
import {Route, Routes, Link} from 'react-router-dom'
import ItemComponent from './components/Item';
import Home from './pages/Home';
import Todos from './pages/Incompleted'
import Completed from './pages/Completed';
let todos = [
  {
    id: 1,
    task: "Complete coding assignment",
    description: "Finish the coding assignment for the upcoming project.",
    completed: false,
  },
  {
    id: 2,
    task: "Buy groceries",
    description: "Purchase fruits, vegetables, and other essential items.",
    completed: true,
  },
  {
    id: 3,
    task: "Exercise",
    description: "Go for a 30-minute jog or do a home workout session.",
    completed: false,
  },
  {
    id: 4,
    task: "Read a book",
    description: "Spend some time reading a novel or a non-fiction book.",
    completed: false,
  },
  {
    id: 5,
    task: "Attend meeting",
    description: "Join the team meeting at 2:00 PM to discuss the project updates.",
    completed: true,
  }
];

console.log(todos);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <h1>html element</h1>
        <p>this is an html element</p>
        {
          todos.map((todo)=>{
              return <ItemComponent title={todo.task} status={todo.completed} desc={todo.description} />
          })
        } */}
      
      <div className="navbar">
        <h2 className="logo">Todoist</h2>
        <div className='flex'>
          <Link to="/todos">My Todos</Link>
          <Link to="/completed">Completed Todos</Link>
        </div>
      </div>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/completed' element={<Completed />} />
            <Route path='*' element={
              <>
                <h1>This page does not exit</h1>
              </>
            } />
        </Routes>



        

    </>
    
  )
}

export default App
