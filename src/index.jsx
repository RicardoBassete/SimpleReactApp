import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import {API_KEY} from '../.env'

import SearchBar from "./components/search_bar.jsx";
import VideoList from './components/video_list.jsx';

const App = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    YTSearch({key: API_KEY, term: 'teste'}, videos => {
      setVideos(videos)
    })
  }, [])

  return (
    <div>
      <SearchBar />
      <VideoList videos={videos}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#App'))