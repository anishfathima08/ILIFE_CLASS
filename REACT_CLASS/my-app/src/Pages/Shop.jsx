import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

const Shop = () => {

    const { id } = useParams()

    const myPages = [ 'cat', 'dog' ]

    if(!myPages.includes(id)){
        return <Navigate to='*' />
    }

    return (
        <>  
            <div className="container">
                {id === 'cat' 
                ? <h1>Cat Content</h1>
                : <h1>Dog Content</h1>}
            </div>
        </>
    )
}

export default Shop