import logo from './logo.svg'
import './App.css'

function App() {
  let list = ['Hello', 'Hello']

  let addNewHello = () => {
    //alert('Add new hello logic will come here')
    list.push('hello')
    console.log(list)
  }

  return (
    <div>
      <h1>Working with event and list</h1>
      <input type="button" value="say hello" onClick={addNewHello} />
      {list.map((item) => (
        <h3>{item}</h3>
      ))}
    </div>
  )
}
export default App
