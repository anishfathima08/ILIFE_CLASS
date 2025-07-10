import React from 'react'
import { product_data } from './assets/asset'
const Asset = () => {
    return (
        <>
            {/* <h1>{product_data[0].product_name}</h1>
            <img src={product_data[0].product_img} alt="" />
            <h1>{product_data[0].product_price}</h1>
            <p>{product_data[0].product_desc}</p> */}

            {product_data.map((value, index) => {
                return(
                    <>
                        <h1>{value.product_name}</h1>
                        <img src={value.product_img} alt="" height='200px'/>
                        <p>{value.product_price}</p>
                        <p>{value.product_desc}</p>
                    </>
                )
            })}

        </>
    )
}

export default Asset