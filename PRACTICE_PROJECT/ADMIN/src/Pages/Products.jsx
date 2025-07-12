import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context/ContextProvider'
import { myAssets } from '../assets/asset'

const Products = () => {

  const { productData, removeProduct, updateFun, updateImageFun, updateName, setUpdateName, updateCategory,  setUpdateCategory, updatePrice, setUpdatePrice, updateDesc, setUpdateDesc, updateImg, setUpdateImg, updatePreviewImg, setUpdatePreviewImg } = useContext(myContext)

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
                  <button className='btn btn-outline-primary' data-bs-toggle='modal' data-bs-target='#updateModal' onClick={() => updateFun(value._id)}>Update</button>
                </td>
                <td>
                  <button className='btn btn-outline-primary' onClick={() => removeProduct(value._id)}>&times;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal fade" id='updateModal'>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Update</h3>
                <button className='btn-close' data-bs-dismiss='modal'></button>
              </div>
              <div className="modal-body">
                <form>
                  <label className='form-label'>Update Product Photo</label>
                  <input type="file" id='imageInput' className='mb-4 form-control' hidden value={updatePreviewImg} onChange={updateImageFun} />

                  <br />

                  <label htmlFor='imageInput'>
                    <img src={myAssets.uploadImg} alt="" height='150' width='150'  />
                  </label>

                  <br /><br />
                  <label className='form-label'>Update Product Name</label>
                  <input type="text" className='mb-4 form-control' value={updateName} onChange={e => setUpdateName(e.target.value)} />

                  <label className='form-label'>Update Product Category</label>
                  <select className='mb-4 form-control' value={updateCategory} onChange={e => set}>
                    <option hidden>Choose</option>
                    <option>New Arrival</option>
                    <option>Shop</option>
                  </select>

                  <label>Update Product Desc</label>
                  <input type="text" className='mb-4 form-control' value={updateDesc} />

                  <label>Update Product Price</label>
                  <input type="text" className='mb-4 form-control' value={updatePrice} />
                </form>

                <input type="submit" value='Update' className='btn btn-primary form-control'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products