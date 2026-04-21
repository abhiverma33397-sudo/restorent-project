import React from 'react'
import { Link } from 'react-router-dom' // इसे इंपोर्ट करें
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-[#FFF3EC] flex justify-between items-center px-6 z-[9999] shadow-md">
      <div>
        <img src={Logo} className="w-24 h-auto" alt="Logo" />
      </div>
      <div className="flex gap-5 font-semibold font-serif text-gray-800">
        <Link to="/dashboard">Home</Link>
        <Link to="/menu">Menu</Link>  
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar