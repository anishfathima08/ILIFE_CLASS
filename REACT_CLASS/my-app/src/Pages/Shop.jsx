import React from 'react'
import Navbar from './Navbar'
import { useParams, Navigate } from 'react-router-dom'

const Shop = () => {

    const { id } = useParams()

    const myRoute = [ 'mobile', 'phone' ]

    if(!myRoute.includes(id)){
        return <Navigate to='*' />
    }

    return (
        <>
            <Navbar />
            {id === 'mobile' 
            ? <h1>Mobiles</h1> 
            : <h2>Laptops</h2> }
        </>
    )
}

export default Shop