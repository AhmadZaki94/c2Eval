import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddStudent } from './components/AddStudent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddStudent/>
    </div>
  )
}

export default App
