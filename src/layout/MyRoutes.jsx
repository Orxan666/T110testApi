import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import NotFount from '../pages/NotFount'
import Pages from '../pages/Pages'
import ProductDetail from '../pages/ProductDetail'
import Products from '../pages/Products'
import Shop from '../pages/Shop'
const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<NotFount/>}/>


    </Routes>
  )
}

export default MyRoutes