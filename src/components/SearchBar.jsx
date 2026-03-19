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
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
        className="bg-zinc-900 text-white px-4 py-2 rounded-l-full 
                   border border-zinc-700 outline-none w-64 
                   focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-zinc-700 px-4 py-2 rounded-r-full 
                   border border-zinc-700 hover:bg-zinc-600"
      >
        🔍
      </button>
    </div>
  )
}  
export default SearchBar
