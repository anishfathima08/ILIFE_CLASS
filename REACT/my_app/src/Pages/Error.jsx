import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center pt-5 mt-5'>
        <h1>Page Not Found</h1>
        <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default Error