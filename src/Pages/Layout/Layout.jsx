import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'



const Layout = () => {
  return (
    <div className="relative w-full">
      <Navbar/>
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout