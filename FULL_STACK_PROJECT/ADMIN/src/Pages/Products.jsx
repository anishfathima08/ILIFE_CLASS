import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context/ContextProvider'

const Products = () => {

  const { productData, removeProduct } = useContext(myContext)

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between my-5">
          <h3>Products List</h3>
          <Link to='/'>
            <button className='btn btn-primary'>Add Products</button>
          </Link>
        </div>

        <table className='table border border-primary text-center align-middle'>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Desc</th>
              <th>Product Price</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((value, index) => (
              <tr key={index}>
                <td>
                  <img src={value.img} alt="" height='100' width='100' />
                </td>
                <td>{value.name}</td>
                <td>{value.category}</td>
                <td>{value.desc}</td>
                <td>{value.price}</td>
                <td>
                  <button className='btn btn-outline-primary'>Update</button>
                </td>
                <td>
                  <button className='btn btn-outline-primary' onClick={() => removeProduct(value._id)}>&times;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products