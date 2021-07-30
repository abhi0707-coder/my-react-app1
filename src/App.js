import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { HelloWorld } from './pages/HelloWorld'
import { HelloUniverse } from './pages/HelloUniverse'

export default function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />

      <HelloUniverse />
      <HelloUniverse />
    </div>
  )
}
