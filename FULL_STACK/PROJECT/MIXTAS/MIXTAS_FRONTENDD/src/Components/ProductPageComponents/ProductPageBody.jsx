import React from 'react'
import { useParams } from 'react-router-dom'
import { all_products } from '../../assets/asset'

const ProductPageBody = () => {

    const { id } = useParams()

    const selectedProduct = all_products.find(a => a.id === Number(id))

    return (
        <>
            <div className="container">
                <div className="row my-5">

                    <div className="col-lg-6">
                        <img src={selectedProduct.img} alt="" className='img-fluid' />
                    </div>

                    <div className="col-lg-6">
                        <p className="display-5">{selectedProduct.desc}</p>
                        <p>{selectedProduct.type}</p>
                        <p>₹ {selectedProduct.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageBody