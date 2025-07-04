import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { all_products } from '../../assets/asset'

export const myContext = createContext()

const MyContextProvider = ( { children } ) => {

    const navigate = useNavigate()

    var [ input, setInput ] = useState('')
    
    var [ filteredData, setFilteredData ] = useState([])
    
    const SearchFun = () => {
        setFilteredData(all_products.filter(a => a.type.toLowerCase().includes(input.toLowerCase())))
    }

    const myContextValue = {
        navigate,
        input, setInput,
        filteredData, SearchFun
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default MyContextProvider