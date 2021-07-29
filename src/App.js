import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [name] = useState('Abhijeet')
  let [counter] = useState(100)
  let [active] = useState(true)
  let [list] = useState(['Kunal', 'akash', 'tushar'])
  let [std1] = useState({ name: 'aditya' })

  return (
    <div>
      <h1>learning to declare stateful variables</h1>
      <h1>String :: {name}</h1>
      <h1>Number :: {counter}</h1>
      <h1>Boolean :: {active + ''}</h1>
      <h1>List ::{list}</h1>
      <h1>Object ::{std1.name}</h1>
      <h1>Object :: {JSON.stringify(std1)}</h1>
    </div>
  )
}

export default App
