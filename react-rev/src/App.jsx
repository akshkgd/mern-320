import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/Demo';

function App() {

  let [counter, setCounter] = useState(0);
  let [nameCount, setNameCount] = useState(0);
  let [nameInput, setNameInput] = useState('')
  // const nameInput = useRef();

  function incrementHandler(){
    setCounter(counter+1)
  }
  function decrementHandler(){
    setCounter(counter-1)
  }
  function submitHandler(){
    // let name = nameInput.current.value;
    // let count = name.length;
    // console.log(name, count)
  }


  function nameValidationHandler(e){
    
    let name = e.target.value;
    console.log('name', name)
    let count = name.length;
    setNameCount(count);
    console.log("typeof ", typeof name)
    if(typeof name === 'string'){
      console.log('validated');
    }
    else{
    console.log('enter the string!!')
  }
  }
  
  return (
    <>
      {/* <h1>Please enter your name</h1>
      <h1 className={counter<0 ? "red" : ""}>{counter}</h1>
      <button className="btn" onClick={incrementHandler}>Increment +</button>
      <button className="btn" disabled={counter<=0? true : false} onClick={decrementHandler}>Decrement -</button> */}
      


      <h2>Welcome to the React js Bootcamp</h2>
      <input type="text" value={nameInput} onChange={nameValidationHandler} className={nameCount<=3 && nameCount>0? "danger": ""}  placeholder='Enter the name'/>
      <button className="btn" onClick={submitHandler}>Submit Name</button>
    </>
  )
}

export default App
