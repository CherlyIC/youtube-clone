import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Feed from './pages/Feed'
import VideoDetails from './pages/VideoDetails'
import ChannelDetails from './pages/ChannelDetails'
import SearchResults from './pages/SearchResults'
import Navbar from './components/Navbar'


const queryClient = new QueryClient()

function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="bg-white dark:bg-[#0f0f0f] min-h-screen text-black dark:text-white transition-colors duration-200">
           <Navbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Routes>
             <Route
              path="/"
              element={
                <Feed
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
             <Route path="/search/:searchTerm" element={<SearchResults />} />



            

          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
export default App