import React, { useState } from "react"
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Body = () => {
  const [name, setname] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  function registeruser(event) {
    event.preventDefault()
    var users = JSON.parse(localStorage.getItem("users") || "[]")
    var newuser = {
      name: name,
      username: username,
      password: password,
    }
    users.push(newuser)
    localStorage.setItem("users", JSON.stringify(users))
    alert("Registration Successfull")
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://waichung2848t.files.wordpress.com/2012/11/fb-connection.jpg'
            alt='Not Found'
          />
        </div>
        <div className='col-md-4'>
          <h1>Register</h1>
          <form onSubmit={registeruser}>
            <input
              type='text'
              placeholder='name'
              className='form-control'
              onChange={(e) => {
                setname(e.target.value)
              }}
              value={name}
            />
            <input
              type='text'
              placeholder='username'
              className='form-control'
              onChange={(e) => {
                setusername(e.target.value)
              }}
              value={username}
            />
            <input
              type='text'
              placeholder='password'
              className='form-control'
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              value={password}
            />
            <input type='submit' className='btn btn-primary' value='SIGN UP' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Body
