import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Layout/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
     
      <div className="pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;