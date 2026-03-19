import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'


const Navbar = ({ selectedCategory, setSelectedCategory, darkMode, setDarkMode }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white dark:bg-[#0f0f0f] text-black dark:text-white flex items-center justify-between px-4 py-2 h-14 border-b border-zinc-200 dark:border-transparent transition-colors duration-200">
        {/* Left Side: Menu & Logo */}
        <div className='flex items-center gap-4'>
          <button
            className='hover:bg-zinc-100 dark:hover:bg-[#272727] rounded-full p-2 transition-colors text-black dark:text-white'

            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
            )}
          </button>

          <Link to="/" className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FF0000]" fill="currentColor">
              <path d="M21.58 6.5A2.71 2.71 0 0 0 19.67 4.6C17.97 4.14 12 4.14 12 4.14s-5.97 0-7.67.46A2.71 2.71 0 0 0 2.42 6.5C1.96 8.2 1.96 12 1.96 12s0 3.8.46 5.5a2.71 2.71 0 0 0 1.91 1.9c1.7.46 7.67.46 7.67.46s5.97 0 7.67-.46a2.71 2.71 0 0 0 1.91-1.9c.46-1.7.46-5.5.46-5.5s0-3.8-.46-5.5zM9.96 15.5v-7l6.23 3.5-6.23 3.5z" />
            </svg>
            <span className="text-white text-xl font-semibold tracking-tighter">YouTube</span>
          </Link>
        </div>

        {/* Center: SearchBar */}
        <SearchBar />

        {/* Right Side: Icons */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex flex-col items-center justify-center hover:bg-zinc-100 dark:hover:bg-[#272727] w-10 h-10 rounded-full transition-colors text-xl"
            title="Toggle Light/Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          
          <button className="hidden sm:flex flex-col items-center justify-center hover:bg-zinc-100 dark:hover:bg-[#272727] w-10 h-10 rounded-full transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black dark:text-white"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z" /></svg>
          </button>
          <button className="relative hidden sm:flex flex-col items-center justify-center hover:bg-zinc-100 dark:hover:bg-[#272727] w-10 h-10 rounded-full transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black dark:text-white"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
            <span className="absolute top-2 right-2 bg-[#CC0000] text-white text-[10px] font-bold px-[4px] py-[1px] rounded-full border border-white dark:border-[#0f0f0f]">9+</span>
          </button>
          <img src="https://ui-avatars.com/api/?name=User&background=606060&color=fff" alt="User Profile" className="w-8 h-8 rounded-full cursor-pointer ml-2" />
        </div>
      </nav>
      {mobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 dark:bg-black/80 transition-colors"
          onClick={() => setMobileMenu(false)}>
          <div className="w-64 h-full bg-white dark:bg-[#0f0f0f] transition-colors"
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