import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function VideoCard({ video }) {
  const navigate = useNavigate()
  const videoId = video?.id?.videoId || (typeof video?.id === 'string' ? video?.id : null)

  if (!videoId) return null

  const thumbnail =
    video?.snippet?.thumbnails?.high?.url ||
    video?.snippet?.thumbnails?.medium?.url ||
    video?.snippet?.thumbnails?.default?.url ||
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`

  return (
    <div
      onClick={() => navigate(`/video/${videoId}`)}
      className="bg-zinc-50 dark:bg-[#181818] rounded-xl overflow-hidden
                 hover:scale-105 transition-all duration-200
                 cursor-pointer group flex flex-col shadow-sm dark:shadow-none"
    >
      <div 
        className="relative w-full pt-[56.25%] bg-zinc-200 dark:bg-zinc-800 bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        {/* Overlay hover effect */}
        <div className="absolute inset-0 group-hover:bg-black/20 transition-all duration-200">
        </div>
      </div>

      <div className="p-3 flex gap-3">
        <div className="bg-red-600 text-white rounded-full w-9 h-9
                        flex items-center justify-center font-bold
                        text-sm flex-shrink-0">
          {video?.snippet?.channelTitle?.charAt(0)?.toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-black dark:text-white text-sm font-semibold
                         line-clamp-2 leading-snug mb-1">
            {video?.snippet?.title}
          </h3>
          <Link
            to={`/channel/${video?.snippet?.channelId}`}
            onClick={(e) => e.stopPropagation()}
            className="text-zinc-600 dark:text-zinc-400 text-xs hover:text-black dark:hover:text-white
                       transition-colors duration-200"
          >
            {video?.snippet?.channelTitle}
          </Link>
          <p className="text-zinc-500 text-xs mt-1">
            {new Date(video?.snippet?.publishedAt)
              .toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard