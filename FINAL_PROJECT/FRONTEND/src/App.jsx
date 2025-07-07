import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import MyContextProvider from './Context/MyContextProvider'
import ShopPage from './pages/ShopPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/shop' element={<ShopPage />}/>
            <Route path='/product/:id' element={<ProductPage />}/>
          </Routes>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App