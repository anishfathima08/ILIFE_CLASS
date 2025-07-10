import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const myContext = createContext()
 
const ContextProvider = ({children}) => {

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ img, setImg ] = useState('')
    const [ imgPreview, setImgPreview ] = useState('')

    const [ productData, setProductData ] = useState([])

    const url = 'http://localhost:8080/api'

    const submitFun = async (e) => {
        e.preventDefault()

        try{
            const formData = {
                name, 
                category, 
                desc,
                price,
                img
            }

            await axios.post(`${url}/add`, formData)
            alert('Data Added')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    const imageFun = (e) => {
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()

            reader.onloadend = () => {
                setImg(reader.result)
                setImgPreview(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }

    const fetchData = async () => {
        try{
            const productList = await axios.get(`${url}/products`)
            setProductData(productList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const removeProduct = async (id) => {
        try{
            await axios.delete(`${url}/remove/${id}`)
            alert('Product Removed Successfully !')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    const myContextValue = {
        name, setName, 
        category, setCategory, 
        price, setPrice, 
        desc, setDesc, 
        
        submitFun, imageFun,

        imgPreview,

        productData,

        removeProduct
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider