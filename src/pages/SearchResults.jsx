import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import VideoCard from '../components/VideoCard'
import ChannelCard from '../components/ChannelCard'
import Loader from '../components/Loader'

function SearchResults() {
  const { searchTerm } = useParams()

  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
  })

  if (isLoading) return <Loader />

  if (isError) return (
    <div className="text-center mt-20">
      <p className="text-red-500 text-xl">⚠️ Something went wrong.</p>
      <p className="text-zinc-400 mt-2">
        Could not load results for "{searchTerm}".
      </p>
    </div>
  )

  return (
    <div className="bg-black min-h-screen px-6 py-6">

      <h2 className="text-white text-xl font-bold mb-6">
        Results for{' '}
        <span className="text-red-600">"{searchTerm}"</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2
                      lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.items?.map((item) => {

          if (item?.id?.channelId) {
            return (
              <ChannelCard
                key={item?.id?.channelId}
                channel={item}
              />
            )
          }

          if (item?.id?.videoId) {
            return (
              <VideoCard
                key={item?.id?.videoId}
                video={item}
              />
            )
          }

          return null
        })}
      </div>

    </div>
  )
}

export default SearchResults