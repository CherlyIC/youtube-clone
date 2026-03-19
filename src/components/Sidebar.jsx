import React from 'react'
export const categories = [
  { name: 'New', icon: '🏠' },
  { name: 'Coding', icon: '💻' },
  { name: 'Music', icon: '🎵' },
  { name: 'Gaming', icon: '🎮' },
  { name: 'Cricket', icon: '🏏' },
  { name: 'Movie', icon: '🎬' },
  { name: 'Sport', icon: '⚽' },
  { name: 'News', icon: '📰' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Podcast', icon: '🎙️' },
  { name: 'Travel', icon: '✈️' },
  { name: 'Education', icon: '📚' },
]
  const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-white dark:bg-[#0f0f0f] h-full w-60 flex flex-col 
                    py-4 overflow-y-auto sticky top-14 pr-3 transition-colors duration-200">
      
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={`flex items-center gap-5 px-3 py-2.5 mx-3 rounded-lg text-left
                      hover:bg-zinc-100 dark:hover:bg-[#272727] transition-all duration-200
                      ${selectedCategory === category.name 
                        ? 'bg-zinc-100 dark:bg-[#272727] text-black dark:text-white font-medium' 
                        : 'text-zinc-600 dark:text-zinc-100'
                      }`}
        >
          <span className="text-xl flex items-center justify-center w-6 ">{category.icon}</span>
          <span className="text-[15px]">{category.name}</span>
        </button>
      ))}

    </div>
  )
}
export default Sidebar