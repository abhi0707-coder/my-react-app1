import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

export default function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />

      <HelloUniverse />
      <HelloUniverse />
    </div>
  )
}

// TAGS :: COMPONENTS :: Follow PascalCase Convention
// <HelloWorld />
function HelloWorld() {
  return (
    <div className="bg-dark text-danger p-3 mb-1 ">
      <h1>Hello World</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci
        mollitia saepe perferendis rem labore est, itaque quis error, explicabo,
        autem fugiat quo dolorem beatae? Nihil dolor sit labore officia?
      </p>
    </div>
  )
}

// <HelloUniverse />
function HelloUniverse() {
  return (
    <div className="bg-success text-light p-3 my-1">
      <h1>Hello Universe</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi
        quidem ratione aut odio libero alias quasi, nisi, temporibus vero
        assumenda. Quia, dicta. Voluptates rerum voluptatum ducimus itaque sequi
        dicta?
      </p>
    </div>
  )
}
