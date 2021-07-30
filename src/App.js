import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { HelloWorld } from './pages/HelloWorld'
import { HelloUniverse } from './pages/HelloUniverse'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

function MyComponent() {
  let [list, setList] = useState(['Abhijeet', 'tushar', 'Rekha', 'Rajendra'])

  let postYourThought = () => {
    let newlist = ['New Thoughts', ...list]
    setList(newlist)
  }
  return (
    <div className="m-2">
      <h1>Work With Forms</h1>

      <input
        type="text"
        className="form-control form-control-lg my-2"
        style={{ height: 70 }}
        placeholder="Post Your Thoughts"
      />
      <input
        type="
          button"
        className="btn btn-dark w-100"
        value="POST THOUGHTS"
        onDoubleClick={postYourThought}
      />
      <div className="h1 border p-2 bg-primary my-1 text-danger ">
        Thoughts List
      </div>
      {list.map((item) => {
        return <div className="alert alert-warning mt-2">{item}</div>
      })}
    </div>
  )
}
