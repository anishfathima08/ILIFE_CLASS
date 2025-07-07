import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { all_products } from '../../assets/asset'
import axios from 'axios'

const ProductPageBody = () => {

    const { id } = useParams()

    const [productData, setProductData] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/products')
            setProductData(response.data)
        } catch (err) {
            console.log('Error fetching products:', err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const selectedProduct = productData.find(a => a._id === id)

    return (
        <>
            <div className="container">
                <div className="row my-5">

                    <div className="col-lg-6">
                        <img src={selectedProduct.productImage} alt="" className='img-fluid' />
                    </div>

                    <div className="col-lg-6">
                        <p className="display-5">{selectedProduct.productDesc}</p>
                        <p>{selectedProduct.productType}</p>
                        <p>₹ {selectedProduct.productPrice}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageBody