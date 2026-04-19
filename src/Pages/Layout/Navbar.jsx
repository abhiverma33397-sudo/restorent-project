import React from 'react'
import Logo from '../../assets/Logo.png'


const Navbar = () => {
  return (
    <div>
      <div className="justify-between">
             <div className="flex justify-between bg-[#FFF3EC] h-16 items-center">
               <div>
                 <img src={Logo} className="w-24 h-26" alt="Logo" />
               </div>
               <div className="flex gap-5 justify-end items-center  px-5 font-semibold font-serif">
                 <a href="/orders">Home</a>
                 <a href="/menu">Menu</a>
                 <a href="/profile">About</a>
                 <a href="/settings">Contact</a>
               </div>
             </div>
           </div> 
    </div>
  )
}

export default Navbar
