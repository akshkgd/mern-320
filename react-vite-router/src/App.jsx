import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes, Link} from 'react-router-dom'
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Index /> */}
      {/* <About /> */}
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/jfkdjk'>Not found</Link>

      </nav>


      <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
