import React, { useContext } from 'react'
import { myContext } from './Context'

const Form_Submit = () => {

    const { username, password, navigate } = useContext(myContext)

    return (
        <>
            <h1>Login Successfully !</h1>
            <p>Username : {username}</p>
            <p>Password : {password}</p>
            <button onClick={() => navigate('/home')}>Go to Home Page</button>
            <button onClick={() => navigate('/about')}>Go to About Page</button>
        </>
    )
}

export default Form_Submit


