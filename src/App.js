import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  )
}

function MyRegisterComponent() {
  let [userList, setUserList] = useState([666, 0])
  return (
    <div>
      <h1 className="bg-dark text-light p-3 ">User Registration </h1>
      <form className="m-2">
        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter username"
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Passwword"
          />
        </div>
        <div>
          <input
            type="email"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <input
            type="mobile"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Mobile"
          />
        </div>
        <div>
          <input
            type="button"
            value="Register"
            className="btn btn-lg btn-info w-100"
          />
        </div>
      </form>
      <table className="table table-dark table-striped m-1 ">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">USERNAME</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">EMAIL</th>
            <th scope="col">MOBILE</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            return (
              <tr>
                <td>1</td>
                <td>Abhijeet</td>
                <td>@#@#@#@#</td>
                <td>abhijeet@mgmil.com</td>
                <td>817793</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
