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
  let [list, setList] = useState([])

  //1
  let [thought, setThought] = useState('')

  let postYourThought = () => {
    let newlist = [thought, ...list]
    setList(newlist)
    // clear the input:thougth
    setThought('')
  }
  //4
  let handleInputChange = (e) => {
    console.log(e.target.value)
    let newthought = e.target.value
    setThought(newthought)
  }
  // ENTER-2
  const handleKeyEvent = (e) => {
    // console.log(e.key, e.keyCode);
    if (e.keyCode == 13) {
      // console.log("User Has Pressed Entered....");
      postYourThought()
    }
  }

  return (
    <div className="m-2">
      <h1 className="bg-primary rounded p-3 sticky-top">
        Work With Minifacebook
      </h1>

      <input
        type="text"
        className="form-control form-control-lg my-2"
        style={{ height: 70 }}
        placeholder="Post Your Thoughts"
        value={thought} //2
        onChange={handleInputChange} //3
        onKeyDown={handleKeyEvent} // ENTER-1
      />
      <input
        type="
          button"
        className="btn btn-dark w-100"
        value="POST THOUGHTS"
        onClick={postYourThought}
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
