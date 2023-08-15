import React from 'react'

const LeftNavMenuItme = ({text,action,icon,className }) => {
  return (
    <div className={`text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] + ${className}`}
    onClick={action}>
      <span className='text-xl me-5'>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItme