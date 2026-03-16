import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Sidebar from '../components/Sidebar'
import VideoCard from '../components/VideoCard'
import Loader from '../components/Loader'
import { categories } from '../components/Sidebar'
import { fetchFromAPI } from '../utils/fetchFromAPI'

function Feed({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="flex-1 px-4 py-6">
        <p className="text-white">Feed is working ✅</p>
      </div>
    </div>
  )
}

export default Feed