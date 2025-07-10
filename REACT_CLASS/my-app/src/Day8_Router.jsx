import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Error from './Pages/Error'
import Shop from './Pages/Shop'

const Day8_Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />

                    <Route path='*' element={<Error />} />

                    <Route path='/shop/:id' element={<Shop />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Day8_Router