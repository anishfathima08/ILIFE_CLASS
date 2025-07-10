import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="m-5 d-flex justify-content-between">
                <h2>Logo</h2>
                <div className='d-flex gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/shop/mobile'>Mobile</Link>
                    <Link to='/shop/laptop'>Laptop</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar