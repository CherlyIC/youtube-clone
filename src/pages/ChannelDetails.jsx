import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import VideoCard from '../components/VideoCard'
import Loader from '../components/Loader'

function ChannelDetails() {
  const { id } = useParams()

  const {
    data: channelData,
    isLoading: channelLoading,
    isError: channelError
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => fetchFromAPI(`channels?part=snippet,statistics&id=${id}`)
  })

  const {
    data: videosData,
    isLoading: videosLoading,
    isError: videosError
  } = useQuery({
    queryKey: ['channelVideos', id],
    queryFn: () => fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
  })

  if (channelLoading) return <Loader />

  if (channelError) return (
    <div className="text-center mt-20">
      <p className="text-red-500 text-xl">⚠️ Something went wrong.</p>
      <p className="text-zinc-400 mt-2">Could not load this channel.</p>
    </div>
  )

  const channel = channelData?.items?.[0]
  const snippet = channel?.snippet
  const statistics = channel?.statistics

  return (
    <div className="bg-black min-h-screen">

      {/* Channel Banner */}
      <div className="w-full h-40 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={snippet?.brandingSettings?.image?.bannerExternalUrl ||
               'https://placehold.co/1280x200?text=No+Banner'}
          alt="channel banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Channel Info */}
      <div className="flex flex-col sm:flex-row items-center
                      gap-4 px-6 py-6 border-b border-zinc-800">

        {/* Channel Avatar */}
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-20 h-20 rounded-full object-cover
                     border-2 border-red-600"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://placehold.co/80x80?text=CH'
          }}
        />

        {/* Channel Name + Subscribers */}
        <div className="text-center sm:text-left">
          <h1 className="text-white text-2xl font-bold">
            {snippet?.title}
          </h1>
          <p className="text-zinc-400 mt-1">
            {parseInt(statistics?.subscriberCount)
              .toLocaleString()} subscribers
          </p>
          <p className="text-zinc-500 text-sm mt-1">
            {parseInt(statistics?.videoCount)
              .toLocaleString()} videos
          </p>
        </div>

      </div>

      {/* Channel Videos */}
      <div className="px-6 py-6">
        <h2 className="text-white text-xl font-bold mb-6">
          Latest <span className="text-red-600">Videos</span>
        </h2>

        {videosLoading && <Loader />}

        {videosError && (
          <p className="text-zinc-400">
            Could not load videos for this channel.
          </p>
        )}

        {!videosLoading && !videosError && (
          <div className="grid grid-cols-1 sm:grid-cols-2
                          lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videosData?.items?.map((video) => (
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

export default ChannelDetails