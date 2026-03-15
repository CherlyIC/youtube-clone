import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 bg-black flex items-center justify-between px-6 py-3 border-b border-zinc-800">



      <SearchBar />



    </nav>

  )
}  

export default Navbar