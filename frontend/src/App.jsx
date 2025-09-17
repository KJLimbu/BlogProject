import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateBlogs from './pages/createblogs/CreateBlogs'
import Singlepage from './pages/singlepage/Singlepage'
import Updateblog from './pages/updateblog/Updateblog'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/createblogs' element={<CreateBlogs/>} />
            <Route path='/singlepage/:id' element={<Singlepage/>} />
            <Route path='/updateblog/:id' element={<Updateblog/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
};

export default App