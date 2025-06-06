import React from 'react'
import Form from './Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormSubmit from './FormSubmit'
import Home from './Home'
import Protext from './Protext'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/submit' element = {<FormSubmit />} />
        <Route path='/home' element={
          <Protext > 
            <Home/> 
          </Protext>} 
          />
      </Routes>
    </BrowserRouter>
  )
}

export default Router 