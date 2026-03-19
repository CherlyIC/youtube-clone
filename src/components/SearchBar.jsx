import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }  
  return (
    <div className="flex items-center gap-2 sm:gap-4 md:ml-10">
      <div className="flex items-center border border-[#303030] rounded-full bg-[#121212] focus-within:border-blue-500 overflow-hidden h-10 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px]">
        <div className="hidden sm:flex items-center pl-4 pr-2 text-zinc-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.87,20.17l-5.59-5.6C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search"
          className="bg-transparent text-white outline-none w-full px-4 sm:px-0 h-full"
        />
        <button
          onClick={handleSearch}
          className="bg-[#222222] border-l border-[#303030] px-3 sm:px-5 h-full hover:bg-[#303030] flex items-center justify-center transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-100">
            <path d="M20.87,20.17l-5.59-5.6C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" />
          </svg>
        </button>
      </div>
      <button className="bg-[#181818] hover:bg-[#272727] flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 3a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm5 10A5 5 0 0 1 7 13H5a7 7 0 0 0 14 0h-2z"/>
          <path d="M11 20v3h2v-3h-2z"/>
        </svg>
      </button>
    </div>
  )
}  
export default SearchBar
