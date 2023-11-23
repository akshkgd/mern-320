import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRef, useState} from  'react';
import Users from './components/Users'
const tempUsers = [];

function App() {
  let nameInput = useRef();
  let emailInput = useRef();
  let [user, setUser] = useState('coder!');
  let [users, setUsers] = useState([])
  

  function addUserHandler(){
    let name = nameInput.current.value;
    let email = emailInput.current.value;
    let currentUser = {
      name: name,
      email: email
    }
    setUsers([...users, currentUser])
    
    console.log("main users", users)
  }



  return (
    <>
      <h1>Welcome to react hooks, {user}</h1>
      <div className="input-container">
        <input ref={nameInput} type="text" placeholder='Enter Name' />
        <input ref={emailInput} type="email" placeholder='Enter Email' />

        <button className="btn" onClick={addUserHandler}>Add User</button>


       
      </div>
      <h2>Registered Users</h2>
      
      {
        users.map((user)=>{
          return <Users name={user.name} email={user.email}/>
        })
      }

    </>
  )
}

export default App




