import React from 'react'
import VideoList_Item from './video_list_item.jsx'

const VideoList = ({videos}) => {
  return (
    <ul className='col-md-5 list-group'>
      {videos.map(video => <VideoList_Item video={video}/>)}
    </ul>
  )
}

export default VideoList