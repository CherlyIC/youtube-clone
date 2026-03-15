import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Feed from './pages/Feed'
import VideoDetails from './pages/VideoDetails'
import ChannelDetails from './pages/ChannelDetails'
import SearchResults from './pages/SearchResults'


const queryClient = new QueryClient()

function App() {
  const [ selectedCategory, setSelectedCategory] = useState('New')

  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="bg-black min-h-screen text-white">
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