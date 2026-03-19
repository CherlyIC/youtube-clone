import React from 'react'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Sidebar from '../components/Sidebar'
import VideoCard from '../components/VideoCard'
import Loader from '../components/Loader'
import { categories } from '../components/Sidebar'
import { fetchFromAPI } from '../utils/fetchFromAPI'

function Feed({ selectedCategory, setSelectedCategory }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['feed', selectedCategory],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${selectedCategory}&type=video`),
  })
  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <h2 className='text-black dark:text-white text-2xl font-bold mb-6'>
          {selectedCategory} <span className="text-red-600">videos</span>
        </h2>

        <div>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category.name
                            ? 'bg-black text-white dark:bg-white dark:text-black'
                            : 'bg-zinc-100 text-black dark:bg-[#272727] dark:text-white hover:bg-zinc-200 dark:hover:bg-[#373737]'
                          }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {isLoading && <Loader />}
        {isError && ( <div className="text-center mt-20">
          <p className="text-red-500 text-xl">Something went wrong</p>
          <p className='text-zinc-600 dark:text-zinc-400 mt-2'>please check your internet </p>
        </div>)}

         {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2
                          lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.items?.map((video) => (
              <VideoCard
                key={video?.id?.videoId || video?.id}
                video={video}
              />
            ))}
          </div>
        )}

      
      </div>
    </div>
  )
}

export default Feed