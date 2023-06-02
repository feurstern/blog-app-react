import React from 'react'
import logo from '../assets/pics/log-blog.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} height='80px' />
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=language'>
            <h6>Language</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>Science</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>Technology</h6>
          </Link>
          <Link className='link' to='/?cat=history'>
            <h6>History</h6>
          </Link>
          <span>username</span>
          <span>Logout</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar
