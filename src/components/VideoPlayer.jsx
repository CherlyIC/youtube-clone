import React from 'react'
import { useState, useRef } from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer({VideoId}) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const playerRef = useRef(null)

  const handleFullScreen = () => {
    if (playerRef.current){
      const playerElement = playerRef.current
      if(!isFullScreen){
        if(playerElement.requestFullScreen){
          playerElement.requestFullScreen()
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          }
        }
        setIsFullScreen(!isFullScreen)
      }
    }
  }
  return(
    <div className="relative w-full" ref={playerRef}>
        <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        playing
        width="100%"
        height="500px"
      />

      <button
        onClick={handleFullScreen}
        className="absolute bottom-4 right-4 bg-black bg-opacity-70
                   text-white px-3 py-1 rounded-lg text-sm
                   hover:bg-opacity-100 transition-all duration-200 z-10"
      >
        {isFullScreen ? '⛶ Exit Fullscreen' : '⛶ Fullscreen'}
      </button>



    </div>
  )
}
export default VideoPlayer