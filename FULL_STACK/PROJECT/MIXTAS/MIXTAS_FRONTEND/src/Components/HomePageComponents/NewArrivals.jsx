import React, { useContext } from 'react'
import { all_products } from '../../assets/asset'
import { myContext } from '../../Context/MyContextProvider'

const NewArrivals = () => {

    const { navigate } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center display-5 mb-5">New Arrivals</h1>

                <div className="row">
                    {all_products.filter((value) => value.category === 'new-arrival').map((value, index) => {
                        return (
                            <div className='col-lg-3 col-md-6' key={index}>
                                <div className="card border-0">
                                    <img src={value.img} alt="" onClick={() => navigate(`/product/${value.id}`)} />
                                    <div className="card-body">
                                        <p className='text-secondary'>{value.type}</p>
                                        <div className='d-flex justify-content-between'>
                                            <p>{value.desc}</p>
                                            <i className='fa fa-shopping-cart border rounded-circle p-3'></i>
                                        </div>
                                        <p>₹ {value.price}</p>
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

export default NewArrivals