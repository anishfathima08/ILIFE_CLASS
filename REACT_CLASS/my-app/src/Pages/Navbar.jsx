import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center my-5">
                <h3>Logo</h3>
                <div className='d-flex gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>

                    <h5 onClick={() => navigate('/')}>Home</h5>
                    <h5 onClick={() => navigate('/about')}>About</h5>
                    <h5 onClick={() => navigate('/contact')}>Contact</h5>
                </div>
            </div>
        </>
    )
}

export default Navbar   