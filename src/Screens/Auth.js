import React from 'react'
import '../styles/auth.css'
import { useState } from 'react';
import { localhost_backend } from '../env';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Auth() {
  const navigate = useNavigate();

  let [username,setUsername] = useState("")
  let [password,setPassword] = useState("")
  let handelSubmit = (event) => {
    event.preventDefault()
    let data = JSON.stringify({
      "username":username,
      "password":password
    })
    fetch(localhost_backend+'api/token/',{method:"POST",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },body:data})
      .then(response => {
        if(response.status == 200){
          return response.json()
        }
      })
      .then(response => {
        localStorage.setItem("authToken",response['access'])
        navigate("/")
    })
  }

  return (
    <div className='text-center d-flex flex-column justify-content-center' style={{backgroundColor:"#0D0E0D",height:"100vh",color:"white"}}>
      <div style={{width:"40vw",marginLeft:"auto",marginRight:"auto"}}>
        <div className='heading-login'>
        Inventory and Expense Tracker For Small and Mid range Businees        </div>
          <form onSubmit={handelSubmit}>
          <div className='d-flex flex-column'>
              <label className='labels'>UserName</label>
              <input type="text" name="username" className='input-login' onChange={(e)=> setUsername(e.target.value)} value={username}/>
          </div>
          <div className='d-flex flex-column'>
              <label className='labels'>Password</label>
              <input type="password" name="password" className='input-login' onChange={(e)=> setPassword(e.target.value)} value={password}/>
          </div>
          <div>
              <button type="submit" className='login-button' onClick={handelSubmit}>Log In</button>
          </div>
          </form>
          <div>
              <Link to={"/register"}>Register</Link>
          </div>
      </div>
    </div>
  )
}

export default Auth;
