import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { myAssets } from '../assets/asset'

const Form = () => {

    var url = 'http://localhost:8080/api'

    var [name, setName] = useState("")
    var [type, setType] = useState("")
    var [desc, setDesc] = useState("")
    var [price, setPrice] = useState("")
    var [img, setImg] = useState("")
    var [preview, setPreview] = useState("") 

    const submitFun = async (e) => {
        try {
            e.preventDefault()

            const formData = {
                productName: name,
                productType: type,
                productDesc: desc,
                productPrice: price,
                productImage: img
            }

            await axios.post(`${url}/add`, formData)
            alert('Data Added')
            setName("")
            setType("")
            setDesc("")
            setPrice("")
            setImg("")
            setPreview("") 
        } catch (err) {
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const imageFun = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onloadend = () => {
            setImg(reader.result)
            setPreview(reader.result) 
        }

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    return (
        <>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center my-3">
                    <h3>Add Products</h3>
                    <Link to={"/products"} className='text-decoration-none text-dark fs-5'>View Products</Link>
                </div>

                <form onSubmit={submitFun}>

                    <label className='form-label' htmlFor='image' style={{ cursor: 'pointer' }}>
                        <img src={preview ? preview : myAssets.uploadImg} alt="" height='200' width='200' />
                    </label>

                    <input onChange={imageFun} id='image' name='productImage' type="file" accept="image/*" hidden className='form-control mb-4' required />

                    <br />

                    <label className='form-label'>Enter Product Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name='productName' type="text" className='form-control mb-4' required />

                    <label className='form-label'>Select Product Type</label>
                    <select className='form-control mb-4' value={type} onChange={(e) => setType(e.target.value)} required>
                        <option hidden>Choose</option>
                        <option>New Arrival Product</option>
                        <option>Shop Product</option>
                    </select>

                    <label className='form-label'>Enter Product Price</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} name='productPrice' type="number" className='form-control mb-4' required />

                    <label className='form-label'>Enter Product Description</label>
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} name='productDesc' type="text" className='form-control mb-4' required />

                    <input type="submit" className='btn btn-primary w-100' />
                </form>
            </div>
        </>
    )
}

export default Form
