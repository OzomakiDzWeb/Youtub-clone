import React, { useContext, useEffect, useState } from 'react'
import { context } from '../Context/contextApi'
import { useParams } from 'react-router'
import {fetchDataApi} from '../Utiltis/Api'

const VideoDetails = () => {
  const [video,setvideo]=useState()
  const [relatedVideo,setRelatedVideo]=useState()
  const {id}=useParams()
  const {setLoding}=useContext(context)
  useEffect(()=>{
fetchVideoDetails()
  },[id])
  const fetchVideoDetails=()=>{
    setLoding(true)
    fetchDataApi(`video/details/?id=${id}`).then(res=>{
      console.log(res)
      setvideo(res)
      setLoding(false)
    })
  }
  
  return (
    <div>VideoDetails</div>
  )
}

export default VideoDetails