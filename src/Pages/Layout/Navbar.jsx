import React from 'react'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    
    <nav className="fixed top-0 left-0 right-0 w-full h-16 bg-[#FFF3EC] flex justify-between items-center px-6 md:px-12 z-[9999] shadow-md">
      
      <div className="flex items-center">
        <img src={Logo} className="w-20 h-auto" alt="Logo" />
      </div>

      <div className="flex gap-6 font-semibold font-serif text-gray-800">
        <a href="/orders">Home</a>
        <a href="/menu">Menu</a>
        <a href="/profile">About</a>
        <a href="/settings">Contact</a>
      </div>

    </nav>
  )
}

export default Navbar