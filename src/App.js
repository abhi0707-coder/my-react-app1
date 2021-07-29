import logo from './logo.svg'
import './App.css'

function App() {
  let title = 'Event Demo'

  let myfun = () => {
    alert('I am a click handelar')
  }

  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="click me" onClick={myfun} />
    </div>
  )
}
export default App
