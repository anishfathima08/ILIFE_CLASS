import React from 'react'
import { Navigate } from 'react-router-dom'

const Protext = ({children}) => {

    var user = localStorage.getItem('username')

    if(!user){
        return <Navigate to='/' />
    }

    return (children)

}

export default Protext 