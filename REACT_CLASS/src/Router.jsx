import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import ErrorPage from './Pages/ErrorPage'
import Categories from './Pages/Categories'
import Navbar from './Pages/Navbar'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/shop/:id' element={<Categories />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router 