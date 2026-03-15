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
    <div className="bg-zinc-900 h-full w-56 flex flex-col 
                    py-4 overflow-y-auto sticky top-16">
      
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={`flex items-center gap-3 px-4 py-3 text-left
                      hover:bg-zinc-700 transition-all duration-200
                      ${selectedCategory === category.name 
                        ? 'bg-zinc-700 text-white font-bold border-l-4 border-red-600' 
                        : 'text-zinc-400'
                      }`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}

    </div>
  )
}
export default Sidebar