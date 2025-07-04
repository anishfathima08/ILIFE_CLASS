import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const myContext = createContext()

const MyContextProvider = ({children}) => {

    const navigate = useNavigate()

    const myContextValue = {
        navigate
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default MyContextProvider