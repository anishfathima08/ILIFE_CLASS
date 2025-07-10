import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const myContext = createContext()

const Context = ({children}) => {

    const [ username, setUsername ]  = useState('')
    const [ password, setPassword ]  = useState('')

    const navigate = useNavigate()

    const submitFun = (e) => {
        e.preventDefault()
        if(username === 'abc' && password === 'Abc@123'){
            navigate('/submit')
        }
        else{
            alert('Invalid Inputs')
        }
    }

    localStorage.setItem('username', username)

    const myContextValue = {
        username, setUsername,
        password, setPassword,
        submitFun,
        navigate
    }       

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default Context