import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [list, setList] = useState([])

  let addNewHello = () => {
    const newList = [...list, 'hello World']
    setList(newList)
    console.log(list)
  }

  return (
    <div>
      <h1>Working with event and list</h1>
      <input type="button" value="say hello" onClick={addNewHello} />
      {list.map((item) => {
        return (
          <h3>
            {item}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            quasi, officiis id vel esse non incidunt dicta ullam ea harum error
            atque facilis quam perspiciatis ipsa nulla ab labore similique.
          </h3>
        )
      })}
    </div>
  )
}
//export default App
