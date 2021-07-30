import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  let [list, setList] = useState(['Kunal', 'Tushar'])

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
        return (
          <div className="bg-success text-light p-2 my-1 h5">
            {item}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            rerum eum porro excepturi culpa magnam tempore praesentium. Labore
            similique commodi rem? Accusamus obcaecati praesentium sunt eum
            expedita omnis fugiat beatae.
          </div>
        )
      })}
    </div>
  )
}

export default App
