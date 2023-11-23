import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  let [counter, setCounter] = useState(0)
  let [visibility, setVisibility] = useState(false)



  function incrementHandler(){
   setCounter('this is the updated text')
   setVisibility(true)
    console.log(counter)
  }
  return (
    <div className="App">
      <h1>Welcome to day 2 of react JS</h1>

      <h1 className='counter'>{counter}</h1>
      <button className='btn' onMouseOver={incrementHandler}>Increment +</button> 
    
    
      <div className={visibility == true? "demo" : "d-none"}>

      </div>
    
    </div>
  );
}

export default App;
