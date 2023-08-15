import React, { useContext } from 'react'
import { context } from '../Context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'
const Feed = () => {
  const {loding,searchResultes}=useContext(context)
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5'>
          {!loding && searchResultes.map((itm,idx)=>{
            return(
              <VideoCard
                 key={idx}
                 video={itm?.video}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Feed