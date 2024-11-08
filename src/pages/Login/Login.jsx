// import React from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'
import { useState } from "react"

const Login = () => {

  const [signstate, setsignstate] = useState("Sign Up");
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign Up" ?
            <input type="text" placeholder="Your Name" /> :
            <></>
          }
          <input type="email" placeholder="Your Email ID" />
          <input type="password" placeholder="Password" />
          <button>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            signstate === "Sign In" ?
              <p>New to Netflix <span onClick={() => { setsignstate("Sign Up") }}>Sign Up Now</span></p> :
              <p>Already on Netflix <span onClick={() => { setsignstate("Sign In") }}>Sign In Here</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
