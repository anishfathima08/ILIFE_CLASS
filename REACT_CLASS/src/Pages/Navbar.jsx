import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='d-flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <Link to='/shop/cat'>Cat</Link>
                <Link to='/shop/dog'>Dog</Link>
                <h4 onClick={() => navigate('/')}>Home</h4>
                <h4 onClick={() => navigate('/about')}>About</h4>
                <button onClick={() => navigate('/contact')}>Contact</button>
            </div>
        </>
    )
}

export default Navbar 