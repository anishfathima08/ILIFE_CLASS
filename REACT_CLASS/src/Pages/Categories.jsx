import React from 'react'
import { useParams } from 'react-router-dom'

const Categories = () => {

    const { id } = useParams()

    return (
        <>
            { id === 'dog'  ? <h1>Dog Content</h1> : <h1>Cat Content</h1> }
        </>
    )
}

export default Categories