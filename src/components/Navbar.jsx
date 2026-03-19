import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'


const Navbar = ({selectedCategory, setSelectedCategory }) => {
  const[mobileMenu, setMobileMenu] = useState(false)

  return (
    <div> 
      <nav className="sticky top-0 z-50 bg-black flex items-center justify-between px-6 py-3 border-b border-zinc-800">
        <div className='flex items-center gap-4'>
          <button className='md:hidden text-white text-2xl' onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✖️' : '☰' }

          </button>

          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 text-white font-bold px-2 py-1 rounded text-sm">
              ▶ YouTube
            </div>
          </Link>



        </div>

       <SearchBar />

      </nav>
        {mobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-80"
             onClick={() => setMobileMenu(false)}>
          <div className="w-64 h-full bg-zinc-900"
               onClick={(e) => e.stopPropagation()}>
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={(category) => {
                setSelectedCategory(category)
                setMobileMenu(false) 
              }}
            />
          </div>
        </div>
      )}


      

    </div>

  )
}  

export default Navbar