import logo from './logo.svg'
import './App.css'

function App() {
  let list = ['Hiii', 'Hiii']

  return (
    <div>
      <h1>Working event </h1>
      <input type="button" value="say hii" />

      {list.map((item) => {
        return <h3>{item}</h3>
      })}
    </div>
  )
}
export default App
