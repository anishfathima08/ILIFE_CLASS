import React, { createContext, useState } from 'react'
import axios from 'axios'

export const myContext = createContext()

const ContextProvider = ({children}) => {

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ image, setImage ] = useState('')
    const [ previewImage, setPreviewImage ] = useState('')

    const url = 'http://localhost:8080/api'

    const imageFun = (e) => {
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()

            reader.onloadend = () => {
                setImage(reader.result)
                setPreviewImage(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }

    const submitFun = async (e) => {
        e.preventDefault();

        try{
            const formData = {
                name,
                category,
                desc,
                price, 
                image 
            }

            await axios.post(`${url}/add`, formData)
            alert('Data Added')
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }

    }

    const myContextValue = {
        name, setName,
        category, setCategory,
        desc, setDesc,
        price, setPrice,
        image, setImage,
        previewImage,

        imageFun, submitFun
    }

    return (
        <myContext.Provider value={myContextValue}>
            { children } 
        </myContext.Provider>
    )
}

export default ContextProvider