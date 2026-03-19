import React from 'react'
import { Link } from 'react-router-dom'



function ChannelCard({ channel }) {
  const channelId = channel?.id?.channelId || channel?.id

  return (
    <Link to={`/channel/${channelId}`}>
      <div className="flex flex-col items-center justify-center
                      bg-zinc-50 dark:bg-[#181818] rounded-xl p-6 gap-3
                      hover:bg-zinc-100 dark:hover:bg-[#272727] transition-all duration-200
                      cursor-pointer shadow-sm dark:shadow-none">

        <img
          src={channel?.snippet?.thumbnails?.high?.url}
          alt={channel?.snippet?.title}
          className="w-24 h-24 rounded-full object-cover
                     border-2 border-red-600"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://placehold.co/100x100?text=CH'
          }}
        />

        <div className="text-center">
          <h3 className="text-black dark:text-white font-bold text-sm">
            {channel?.snippet?.title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
            {parseInt(channel?.statistics?.subscriberCount)
              .toLocaleString()} subscribers
          </p>
        </div>

      </div>
    </Link>
  )
}

export default ChannelCard