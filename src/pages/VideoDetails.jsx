import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import VideoCard from '../components/VideoCard'
import Loader from '../components/Loader'
import ReactPlayer from 'react-player'

function VideoDetails() {
  const { id } = useParams()

  const {
    data: videoData,
    isLoading: videoLoading,
    isError: videoError
  } = useQuery({
    queryKey: ['video', id],
    queryFn: () => fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
  })

  const {
    data: relatedData,
    isLoading: relatedLoading,
    isError: relatedError
  } = useQuery({
    queryKey: ['related', id],
    queryFn: () => fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  })

  if (videoLoading) return <Loader />

  if (videoError) return (
    <div className="text-center mt-20">
      <p className="text-red-500 text-xl">⚠️ Something went wrong.</p>
      <p className="text-zinc-400 mt-2">Could not load this video.</p>
    </div>
  )

  const video = videoData?.items?.[0]
  const snippet = video?.snippet
  const statistics = video?.statistics

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 bg-black min-h-screen">

      <div className="flex-1">

        <div className="w-full rounded-xl overflow-hidden bg-zinc-900">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            playing
            width="100%"
            height="500px"
          />
        </div>

        <h1 className="text-white text-xl font-bold mt-4 leading-snug">
          {snippet?.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center
                        justify-between mt-3 gap-3">

          <Link
            to={`/channel/${snippet?.channelId}`}
            className="text-zinc-400 hover:text-white font-medium
                       transition-colors duration-200"
          >
            {snippet?.channelTitle}
          </Link>

          <div className="flex gap-4">
            <div className="bg-zinc-800 px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                👁 {parseInt(statistics?.viewCount).toLocaleString()} views
              </span>
            </div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                👍 {parseInt(statistics?.likeCount).toLocaleString()} likes
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 my-4" />

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-zinc-400 text-sm leading-relaxed
                        whitespace-pre-wrap line-clamp-3">
            {snippet?.description}
          </p>
        </div>

      </div>

      <div className="lg:w-80 xl:w-96">
        <h3 className="text-white font-bold text-lg mb-4">
          Related Videos
        </h3>

        {relatedLoading && <Loader />}

        {relatedError && (
          <p className="text-zinc-400 text-sm">
            Could not load related videos.
          </p>
        )}

        <div className="flex flex-col gap-3">
          {relatedData?.items?.map((relatedVideo) => (
            <VideoCard
              key={relatedVideo?.id?.videoId || relatedVideo?.id}
              video={relatedVideo}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default VideoDetails