import React from 'react'
import { useParams } from 'react-router-dom'

const Categories = () => {

    var { categories } = useParams()

    return (
        <>
            <h1>Categories : {categories} </h1>
        </>
    )
}

export default Categories