import { useState } from 'react'
import './Login.css'
function Login() {
  const [getUser, setUser] = useState("")
  const [getPassword, setPassword] = useState("")
  
  return (
    <div class="container">
      <input id="signup_toggle" type="checkbox" />
      <form class="form">
        <div class="form_front">
          <div class="form_details">Login</div>
          <input type="text" class="input" placeholder="Username" />
          <input type="text" class="input" placeholder="Password" />
          <button class="btn">Login</button>
          <span class="switch">Don't have an account?
            <label for="signup_toggle" class="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div class="form_back">
          <div class="form_details">SignUp</div>
          <input type="text" class="input" placeholder="Firstname" />
          <input type="text" class="input" placeholder="Username" />
          <input type="text" class="input" placeholder="Password" />
          <input type="text" class="input" placeholder="Confirm Password" />
          <button class="btn">Signup</button>
          <span class="switch">Already have an account?
            <label for="signup_toggle" class="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login