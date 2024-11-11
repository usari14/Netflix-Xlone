// import React from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'
import { useState } from "react"
import { login, signup } from '../../Firebase'

const Login = () => {

  const [signstate, setsignstate] = useState("Sign In");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const user_auth = async (e) => {
    e.preventDefault();
    if (signstate === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }

  }

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign Up" ?
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => { setName(e.target.value) }} /> :
            <></>
          }
          <input type="email" placeholder="Your Email ID" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <button onClick={user_auth} type='submit'>{signstate}</button>
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
