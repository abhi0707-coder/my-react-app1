import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [name, setName] = useState('Abhijeet')
  let [counter, setCounter] = useState(100)
  let [active, setActive] = useState(true)
  let [list, setList] = useState(['Kunal', 'akash', 'tushar'])

  return (
    <div>
      <h1>Stateful continue</h1>
      <h1>counter :: {counter}</h1>
      <h1>List :: {list}</h1>
    </div>
  )
}

export default App
