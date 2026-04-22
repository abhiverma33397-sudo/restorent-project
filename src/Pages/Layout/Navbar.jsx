import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] h-20 bg-[#e5e9f0]/95 backdrop-blur-xl border-x border-b border-white/20 rounded-[32px] flex justify-between items-center px-10 z-[10000] shadow-2xl ">
        
        
        <div className="flex items-center">
          <img 
            src={Logo} 
            className="w-24 h-auto hover:scale-105 transition-transform duration-300" 
            alt="TastyBite" 
          />
        </div>

        <div className="hidden lg:flex items-center gap-14">
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/dashboard" : `/${item.toLowerCase()}`}
              className="group relative text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#1a1a1a]"
            >
              {item}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#DA1212] rounded-full transition-all duration-300 group-hover:w-8"></span>
            </Link>
          ))}
        </div>

        
        <div className="hidden md:block">
          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e]"></div>
        </div>

       
        <div 
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-[2.5px] bg-[#1a1a1a] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}></div>
          <div className={`w-6 h-[2.5px] bg-[#1a1a1a] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-[2.5px] bg-[#1a1a1a] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></div>
        </div>
      </nav>

      
      <div className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
        {/* Dark blurred background on open */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-[#e5e9f0] rounded-[32px] p-10 shadow-2xl transition-all duration-500 transform ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-10"}`}>
          <div className="flex flex-col items-center gap-8">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/dashboard" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-black uppercase tracking-[0.3em] text-[#1a1a1a] active:text-[#DA1212]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;