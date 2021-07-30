import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

export default function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloUniverse />
    </div>
  )
}

// TAGS :: COMPONENTS :: Follow PascalCase Convention
// <HelloWorld />
function HelloWorld() {
  return <h1>Hello World</h1>
}

// <HelloUniverse />
function HelloUniverse() {
  return <h1>Hello Universe</h1>
}
