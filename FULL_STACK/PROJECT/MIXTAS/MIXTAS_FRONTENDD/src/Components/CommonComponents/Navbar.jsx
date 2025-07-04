import React from 'react'
import { my_asset } from '../../assets/asset'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container-fluid d-flex justify-content-between px-5 pt-3 border'>
                <p>Free Shipping on US Orders $100+ & Free exchanges</p>
                <div>
                    <span>English</span>
                    <span>USD</span>
                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center px-5 py-3'>
                <img src={my_asset.logo} alt="" height='30px' />
                <div className='d-flex gap-5'>
                    <Link to='/' className='text-decoration-none text-dark'>Home</Link>
                    <Link to='/' className='text-decoration-none text-dark'>About</Link>
                    <Link to='/' className='text-decoration-none text-dark'>Contact</Link>
                    <Link to='/shop' className='text-decoration-none text-dark'>Shop</Link>
                </div>
                <div className="icon d-flex gap-3">
                    <i className="fa-solid fa-magnifying-glass" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
                    <i className="fa-solid fa-shopping-cart" data-bs-toggle='offcanvas' data-bs-target='#cartCanvas'></i>
                </div>
            </div>

            {/* Search Modal */}

            <div className="modal fade" id='searchModal'>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Search Here</h3>
                            <button className="btn-close" data-bs-dismiss='modal'></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart Canvas */}

            <div className="offcanvas offcanvas-start" id='cartCanvas'>
                <div className="offcanvas-header">
                    <h3>Your Cart Products</h3>
                    <button className="btn-close" data-bs-dismiss='offcanvas'></button>
                </div>
                <div className="offcanvas-body">

                </div>
            </div>
        </>
    )
}

export default Navbar