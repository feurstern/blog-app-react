import React from 'react'
import { Link } from 'react-router-dom'
import bgimg  from '../assets/pics/bg-img.png'

const login = () => {
  return (
    <div className='auth'>
      <img src={bgimg} />
       <h1>Login</h1>
       <form>
         
          <input type="text" placeholder='username' />
          <input type='password' placeholder='password' />
          <button>Login</button>
          <p>This is an error</p>
          <span>Don't have an account, register here <Link to="/register">Register</Link>
           </span>
       </form>
    </div> 
  )
}

export default login
