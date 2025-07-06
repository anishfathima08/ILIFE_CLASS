import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Pages/Form'
import Products from './Pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App