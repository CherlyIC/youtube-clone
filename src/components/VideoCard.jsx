import React from 'react'
import { Link } from 'react-router-dom'

function VideoCard({ video }) {
  const videoId = video?.id?.videoId || video?.id

  if (!videoId) return null

  return (
    <div to={`/video/${videoId}`}>
      <div className="bg-zinc-900 rounded-xl overflow-hidden
                      hover:scale-105 transition-transform duration-200
                      cursor-pointer group">

        {/* Thumbnail */}
        <div className="relative">
         <img
          src={
                video?.snippet?.thumbnails?.high?.url ||
                video?.snippet?.thumbnails?.medium?.url ||
                video?.snippet?.thumbnails?.default?.url
              }
             alt={video?.snippet?.title}
             className="w-full h-48 object-cover"
             onError={(e) => {
              e.target.onerror = null
             e.target.src = 'https://via.placeholder.com/480x360?text=No+Thumbnail'
          }}
        />
          <div className="absolute inset-0 bg-black bg-opacity-0
                          group-hover:bg-opacity-20 transition-all duration-200">
          </div>
        </div>

        {/* Video Info */}
        <div className="p-3 flex gap-3">

          {/* Channel Avatar */}
          <div className="bg-red-600 text-white rounded-full w-9 h-9
                          flex items-center justify-center font-bold
                          text-sm flex-shrink-0">
            {video?.snippet?.channelTitle?.charAt(0)?.toUpperCase()}
          </div>

          {/* Title and Channel */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white text-sm font-semibold
                           line-clamp-2 leading-snug mb-1">
              {video?.snippet?.title}
            </h3>
            <Link
              to={`/channel/${video?.snippet?.channelId}`}
              onClick={(e) => e.stopPropagation()}
              className="text-zinc-400 text-xs hover:text-white
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
    </div>
  )
}

export default VideoCard