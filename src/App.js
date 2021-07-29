import logo from './logo.svg'
import './App.css'

function App() {
  let title = 'hello India'
  let list = ['delhi', 'mumbai', 'calcutta', 'chenai', 'pune', 'lonaval']
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {list.map((item) => {
          return <li> {item}</li>
        })}
      </ul>
    </div>
  )
}

export default App
