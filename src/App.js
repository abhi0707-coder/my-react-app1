import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div>
      <h1 className="bg-dark text-light p-3">Working with CSS Again</h1>

      <h5 style={{ color: 'white', backgroundColor: 'royalblue' }}>
        INLINE CSS :: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Error eligendi vel reprehenderit. Cumque quia officia, totam sunt
        tempora optio iste mollitia necessitatibus vel eius eligendi veniam
        distinctio recusandae et ea?
      </h5>

      <p className="beautify">
        CSS FILE. App.css Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore accusamus accusantium illum quam enim reprehenderit
        assumenda consequatur impedit, eaque voluptatem aperiam vitae? Pariatur
        deleniti molestiae modi tenetur porro temporibus quisquam?
      </p>
    </div>
  )
}

export default App
