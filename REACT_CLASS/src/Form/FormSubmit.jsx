import React from 'react'
import { Link } from 'react-router-dom'

const FormSubmit = () => {
    return (
        <>
            <h1>Submitted Successfully</h1>
            <Link to='/home'>
                <button>Go To Home Page</button>
            </Link>
        </>
    )
}

export default FormSubmit