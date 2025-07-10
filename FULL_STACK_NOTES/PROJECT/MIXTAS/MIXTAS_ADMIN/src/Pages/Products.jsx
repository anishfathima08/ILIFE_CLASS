import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {

    var url = 'http://localhost:8080/api'

    const [productData, setProductData] = useState([])

    const fetchProducts = async () => {
        try {
            const productList = await axios.get(`${url}/products`) 
            setProductData(productList.data)
        } catch (err) {
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container">

            <div className="d-flex justify-content-between align-items-center my-3">
                <h3>All Products</h3>
                <Link to={"/"} className='text-decoration-none text-dark fs-5'>Add Product</Link>
            </div>

            <table className="my-3 table border border-1 border-primary text-center align-middle">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Desc</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productData.length === 0 
                        ? 
                            <tr>
                                <td colSpan={6} className='text-danger'>No Products</td>
                            </tr>
                        :
                            productData.map((value , index) => {
                                return(
                                    <tr key={index}>
                                        <td><img src={value.productImage} alt="" height={60} /></td>
                                        <td>{value.productName}</td>
                                        <td>{value.productType}</td>
                                        <td>{value.productDesc}</td>
                                        <td>{value.productPrice}</td>
                                        <td><button className='btn btn-primary'>Update</button></td>
                                        <td className='fs-4'><span>&times;</span></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>    

        </div>
    )
}

export default Products
