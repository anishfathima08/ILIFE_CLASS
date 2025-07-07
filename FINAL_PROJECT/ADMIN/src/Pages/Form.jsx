import React, { useContext } from 'react'
import { myContext } from '../Context/ContextProvider'
import { myAssets } from '../assets/asset'
import { Link } from 'react-router-dom'

const Form = () => {

    const { name, setName, category, setCategory, desc, setDesc, price, setPrice, image, setImage, imageFun, previewImage, submitFun } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <div className='my-3 d-flex justify-content-between'>
                    <h1>All Product</h1>
                    <Link to='/products'>
                        <button className='btn btn-primary'>View Products</button>
                    </Link>
                </div>
                <form onSubmit={submitFun}>

                    <label className='form-label' htmlFor='image'>
                        <img src={previewImage ? previewImage : myAssets.uploadImg} alt="" height='150' width='150' />
                    </label>

                    <input required type="file" name='productImage' accept='image/*' id='image' className='form-control mb-4' onChange={imageFun} hidden/>

                    <br /><br />

                    <label className='form-label'>Enter Product Name</label>
                    <input required type="text" name='productName' className='form-control mb-4' value={name} onChange={(e) => setName(e.target.value)} />

                    <label className='form-label'>Enter Product Category</label>
                    <select required className='form-control mb-4' value={category} onChange={(e) => setCategory(e.target.value)} name='productCategory'>
                        <option hidden>Choose</option>
                        <option>New Arrival</option>
                        <option>Shop</option>
                    </select>

                    <label className='form-label'>Enter Product Desc</label>
                    <input required type="text" name='productDesc' className='form-control mb-4' value={desc} onChange={(e) => setDesc(e.target.value)} />

                    <label className='form-label'>Enter Product Price</label>
                    <input required type="number" name='productPrice' className='form-control mb-4' value={price} onChange={(e) => setPrice(e.target.value)} />

                    <input type="submit" className='form-control btn btn-primary' />
                </form>
            </div>
        </>
    )
}

export default Form