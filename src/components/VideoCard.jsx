import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
  // Safely extract the video id - it can be a string or an object
  const videoId = video?.id?.videoId || video?.id

  // Don't render anything if there's no videoId
  if (!videoId) return null

  return (
    <Link to={`/video/${videoId}`}>
      <div className="bg-zinc-900 rounded-xl overflow-hidden
                      hover:scale-105 transition-transform duration-200
                      cursor-pointer">

        {/* Thumbnail */}
        <div className="relative">
          <img
            src={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Video Info */}
        <div className="p-3 flex gap-3">

          {/* Channel Avatar - first letter of channel name */}
          <div className="bg-red-600 text-white rounded-full w-9 h-9
                          flex items-center justify-center font-bold
                          flex-shrink-0">
            {video?.snippet?.channelTitle?.charAt(0)}
          </div>

          {/* Title and Channel */}
          <div>
            <h3 className="text-white text-sm font-semibold line-clamp-2 
                           leading-snug">
              {video?.snippet?.title}
            </h3>
            <Link
              to={`/channel/${video?.snippet?.channelId}`}
              className="text-zinc-400 text-xs mt-1 hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {video?.snippet?.channelTitle}
            </Link>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default VideoCard