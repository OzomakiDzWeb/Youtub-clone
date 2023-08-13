import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { AppContext } from './Context/contextApi'
import Header  from './Component/Header'
import Feed from './Component/Feed'
import SearchResulte from './Component/SearchResulte'
import VideoDetails from './Component/VideoDetails'

const App = () => {
  return (
  <AppContext>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/searchResulte/:searchQuery' element={<SearchResulte/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
      </Routes>
    </BrowserRouter>
  </AppContext>
  )
}

export default App