import React from 'react'
function Loader() {
  return (
    <div className="flex justify-center items-center h-64 w-full">
      <div className="w-12 h-12 border-4 border-zinc-600
                      border-t-red-600 rounded-full animate-spin">
      </div>
    </div>
  )
}
export default Loader