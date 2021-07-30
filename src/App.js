import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  let [list, setList] = useState(['Kunal', 'akash', 'tushar'])

  let updateCounter = () => {
    let newvalue = counter + 1
    setCounter(newvalue)
  }
  let addNewElement = () => {
    let newlist = ['Here is a new post', ...list]
    setList(newlist)
  }
  return (
    <div>
      <h1>Stateful continue</h1>
      <h1>
        counter :: {counter}
        <input type="button" value="increment" onClick={updateCounter} />
      </h1>
      <hr />
      <input
        type="button"
        value="Add New Element in List"
        onClick={addNewElement}
      />
      {list.map((item) => {
        return <h1> {item}</h1>
      })}
    </div>
  )
}

export default App
