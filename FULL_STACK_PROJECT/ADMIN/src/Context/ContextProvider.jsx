import React, { createContext, useState } from 'react'

export const myContext = createContext()
 
const ContextProvider = ({children}) => {

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ img, setImg ] = useState('')

    const myContextValue = {
        name, setName, 
        category, setCategory, 
        price, setPrice, 
        desc, setDesc, 
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider