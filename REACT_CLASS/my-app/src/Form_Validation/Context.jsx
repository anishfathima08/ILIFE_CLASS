import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const myContext = createContext()

const Context = ( { children } ) => {

    const navigate = useNavigate()

    var [ username, setUsername ] = useState('')
    var [ password, setPassword ] = useState('')

    const submitFun = (e) => {
        e.preventDefault()

        if(username == 'abc' && password == '123'){
            navigate('/submit')
        }
        else{
            alert('Invalid Inputs')
        }
    }

    const myContextValue = {
        username, setUsername, 
        password, setPassword,

        submitFun
    }

    return (
        <myContext.Provider value={myContextValue} >
            { children }
        </myContext.Provider>
    )
}

export default Context