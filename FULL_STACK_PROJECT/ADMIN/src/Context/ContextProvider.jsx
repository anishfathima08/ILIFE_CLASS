import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const myContext = createContext()
 
const ContextProvider = ({children}) => {

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ img, setImg ] = useState('')

    const [ previewImg, setPreviewImg ] = useState('')

    const [ productData, setProductData ] = useState([])

    const url = 'http://localhost:8080'

    const submitFun = async (e) => {
        e.preventDefault()

        try{
            const formData = {
                name, 
                category, 
                price,
                desc,
                img
            }

            await axios.post(`${url}/api/add`, formData)

            alert('Product Added !')
        }
        catch(err){
            console.log(`Error Name : ${err.name} and Error Message : ${err.message}`)
        }
    }

    const imageFun = (e) => {
        const file = e.target.files[0]

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setImg(reader.result)   
                setPreviewImg(reader.result)
            }
        }

        reader.readAsDataURL(file)

    }

    const fetchData = async () => {
        try{
            const productList = await axios.get(`${url}/api/products`)
            setProductData(productList.data);
        }
        catch(err){
            console.log(`Error Name : ${err.name} and Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const removeProduct = async (id) => {
        try{
            await axios.delete(`${url}/api/remove/${id}`)
            alert('Product Removed Successfully !')
        }
        catch(err){
            console.log(`Error Name : ${err.name} and Error Message : ${err.message}`)
        }
    }

    const myContextValue = {
        name, setName, 
        category, setCategory, 
        price, setPrice, 
        desc, setDesc, 

        submitFun, imageFun,
        previewImg, productData,

        removeProduct

    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider