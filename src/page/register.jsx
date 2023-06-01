import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
    <h1>Login</h1>
    <form>
       <input required type="text" placeholder='username' />
       <input required type='email' placeholder='email address'/>
       <input required type='password' placeholder='password' />
       <button>Login</button>
       <p>This is an error</p>
       <span>You have an account, login here <Link to="/login">login</Link>
        </span>
    </form>
 </div> 
  )
}

export default Register
