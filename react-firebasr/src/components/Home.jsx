import { useState, useRef, useEffect } from 'react';
import { } from 'react-router-dom';
import TodosCard from './TodosCard';
function Home(){
    const [count, setCount] = useState(0);
  const [alertStatus, setAlertStatus] = useState(false);
  const [todos, setTodos] = useState([]);
  const taskInput = useRef();

    // fetch todos from firebase
    useEffect(()=>{
        fetch('https://mern-320-default-rtdb.firebaseio.com/todos.json').then((data)=>{
             return data.json()}).then((data)=>{
                  let tempTodos = []
                  for(const key in data){
                    let todo = {
                      id: key,
                      ...data[key]
                    }
                    tempTodos.push(todo)
                  }
                  setTodos(tempTodos);
                  
              })
      },[])
              
    useEffect(()=>{
      console.log(todos)
    }, [todos])
    
    function addTaskHandeler(){
        let currentTask = {
          title: taskInput.current.value,
        }
        // submit this value to firebase
        fetch('https://mern-320-default-rtdb.firebaseio.com/todos.json', {
          method: 'POST',
          body: JSON.stringify(currentTask)
        }).then(()=>{
          setAlertStatus(true);
          setTodos((preTodos)=> [...preTodos, currentTask])
        })
      }
    
      function closeAlertHandler(){
        setAlertStatus(false)
      }    
    return(
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


      {
        todos.map((todo)=>{
          return <TodosCard title={todo.title} id={todo.id} />
        })
      }
        </>
    )
}

export default Home;