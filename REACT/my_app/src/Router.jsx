import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Navbar from './Navbar'
import Categories from './Pages/Categories'
import Error from './Pages/Error'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:categories' element={<Categories/>} />
        <Route path= '*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
