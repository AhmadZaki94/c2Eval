import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddStudent } from './components/AddStudent';
import { ShowStudents } from './components/ShowStudents';

function App() {
  const [show, setShow] = useState(false);
  return (

    <div className="App">
      {show ? <AddStudent/> : <ShowStudents/>}
      <button onClick={() => {
        setShow(!show);
      }}>Add</button>

    
    </div>
  )
}

export default App
