import React from 'react'
import {FaCoins} from "react-icons/fa"
import '../stylings/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/'>
    <div>
      <div className='Navbar'>
        <FaCoins className='icon'/>
        <h1>Coin <span className='color-blue'>Search</span></h1>
      </div>
    </div>
    </Link>
  )
}

export default Navbar