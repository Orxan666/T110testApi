import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Pages from '../pages/Pages'
import Shop from '../pages/Shop'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/Shop' element={<Shop/>}/>


    </Routes>
  )
}

export default MyRoutes