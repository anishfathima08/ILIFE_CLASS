// import React, { useContext } from 'react'
// import { all_products } from '../../assets/asset'
// import { myContext } from '../../Context/MyContextProvider'

// const ShopPageBody = () => {

//     const { navigate } = useContext(myContext)

//     return (
//         <>
//             <div className='container my-5'>
//                 <h1 className='text-center display-5'>Shop</h1>

//                 <div className="row">
//                     {all_products.filter(value => value.category === 'shop').map((value, index) => {
//                         return(
//                             <div className='col-lg-3 col-md-6' key={index}>
//                                 <div className="card border-0">
//                                     <img src={value.img} alt="" onClick={() => navigate(`/product/${value.id}`)}/>
//                                     <div className="card-body">
//                                         <p className='text-secondary'>{value.type}</p>
//                                         <div className='d-flex justify-content-between'>
//                                             <p>{value.desc}</p>
//                                             <i className='fa fa-shopping-cart border rounded-circle p-3'></i>
//                                         </div>
//                                         <p>₹ {value.price}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ShopPageBody


import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { myContext } from '../../Context/MyContextProvider'

const ShopPageBody = () => {

    const { navigate } = useContext(myContext)
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

    return (
        <>
            <div className='container my-5'>
                <h1 className='text-center display-5'>Shop</h1>

                <div className="row">
                    {productData.filter(value => value.productType === 'Shop Product').map((value, index) => {
                        return (
                            <div className='col-lg-3 col-md-6' key={index}>
                                <div className="card border-0">
                                    <img src={value.productImage} alt="" onClick={() => navigate(`/product/${value._id}`)} />
                                    <div className="card-body">
                                        <p className='text-secondary'>{value.productName}</p>
                                        <div className='d-flex justify-content-between'>
                                            <p>{value.productDesc}</p>
                                            <p>{value.productType}</p>
                                            <i className='fa fa-shopping-cart border rounded-circle p-3'></i>
                                        </div>
                                        <p>₹ {value.productPrice}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ShopPageBody