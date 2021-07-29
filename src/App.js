import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let counter = 100
  let Increment = () => {
    counter += 1
    console.log(counter)
  }

  return (
    <div>
      <h1>Stateless does not update webpage</h1>
      {counter}
      <input type="button" value="INCREMENT" onClick={Increment} />
    </div>
  )
}

export default App
