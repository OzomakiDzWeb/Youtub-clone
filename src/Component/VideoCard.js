import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video}) => {
  console.log(video.videoId)
  return (
   <Link to={`/video/${video.videoId}`}>
    <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
      <img src={video?.thumbnails?.[0]?.url}/>
    </div>
   </Link>
  )
}

export default VideoCard