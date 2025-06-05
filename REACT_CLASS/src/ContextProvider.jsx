import React, { useState, createContext } from 'react'

export const myContext = createContext()

const ContextProvider = ({children}) => {
    
    var [ input, setInput ] = useState('')

    const display = (e) => {
        setInput(input + e.target.value)
    }       

    const sumFun = () => {
        try{
            setInput(eval(input))
        }
        catch{
            alert('Invalid Expression')
        }
    }

    const allClear = () => {
        setInput('')
    }

    const deleteFun = () => {
        setInput(input.slice(0, -1))
    }

    const contextValue = {
        input, 
        display, 
        sumFun, 
        allClear, 
        deleteFun
    }

    return (
        <myContext.Provider value={contextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider 