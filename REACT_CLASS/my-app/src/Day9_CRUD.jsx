// import React, { useState } from 'react'

// const Crud = () => {

//         var [ input, setInput ] = useState('')
//         var [ list, setList ] = useState([])

//         var [ viewText, setViewText ] = useState('')

//         var [ edit, setEdit ] = useState('')
//         var [ editText, setEditText ] = useState('')

//         const inputFun = (e) => {
//                 setInput(e.target.value)
//         }

//         const addFun = () => {
//                 setList(list.concat(input))
//                 setInput('')
//         }

//         const viewFun = (value) => {
//                 setViewText(value)
//         }

//         const deleteFun = (index) => {
//                 if(confirm('Are You Sure Want to Delete ?')){
//                         setList(list.filter((value, i) => index !== i))
//                 }
//         }

//         const editFun = (index) => {
//                 setEdit(index)
//                 setEditText(list[index])
//         }

//         const editTextFun = (e) => {
//                 setEditText(e.target.value)
//         }

//         const updateFun = () => {
//                 setList(list.map((value, index) => edit === index ? editText : value ))
//                 setEdit('')
//         }

//         return (
//         <>
//                 <div className="container p-5">
//                         <h3>To Do List</h3>
//                         <div className="input-group">
//                                 <input type="text" className='form-control' value={input} onChange={inputFun}/>
//                                 <button className='btn btn-primary' onClick={addFun}>Add</button>
//                         </div>
                        
//                         {
//                                 list.length === 0 
//                                 ? 
//                                 <p className='text-center text-danger my-5'>No Tasks</p>
//                                 :
//                                 <table className='table table-bordered my-5'>
//                                 <thead>
//                                         <tr>
//                                                 <th>List</th>
//                                                 <th>Actions</th>
//                                         </tr>
//                                 </thead>
//                                 <tbody>
//                                         {
//                                                 list.map((value, index) => (
//                                                         <tr key={index}>
//                                                                 <td>
//                                                                         {
//                                                                                 edit === index 
//                                                                                 ? <input type="text" value={editText} onChange={editTextFun} className='form-control' />
//                                                                                 : value
//                                                                         }       

//                                                                 </td>
//                                                                 <td className='d-flex gap-5'>
//                                                                         <button className='flex-grow-1 btn btn-success' data-bs-toggle='modal' data-bs-target='#myModal' onClick={() => viewFun(value)}>View</button>

//                                                                         { 
//                                                                                 edit === index 
//                                                                                 ? 
//                                                                                 <button className='flex-grow-1 btn btn-warning' onClick={updateFun}>Update</button>
//                                                                                 :
//                                                                                 <button className='flex-grow-1 btn btn-warning' onClick={() => editFun(index)}>Edit</button>
//                                                                         }



//                                                                         <button className='flex-grow-1 btn btn-danger' onClick={() => deleteFun(index)}>Delete</button>
//                                                                 </td>
//                                                         </tr>
//                                                 ))
//                                         }
//                                 </tbody>
//                         </table>
//                         }

//                         <div className="modal fade" id='myModal'>
//                                 <div className="modal-dialog">
//                                         <div className="modal-content">
//                                                 <div className="modal-header">
//                                                         <h3>Your Task</h3>
//                                                         <button className='btn-close' data-bs-dismiss='modal'></button>
//                                                 </div>
//                                                 <div className="modal-body">
//                                                         <h3 className='text-center'>{viewText}</h3>
//                                                 </div>  
//                                         </div>
//                                 </div>
//                         </div>

//                 </div>
//         </>
//         )
// }

// export default Crud


import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Day9_CRUD = () => {

    var [ input, setInput ] = useState('')
    var [ list, setList ] = useState([])

    var [ viewModal, setViewModal ] = useState(false)
    var [ viewText, setViewText ] = useState('')

    const inputFun = (e) => {
        setInput(e.target.value)
    }

    const addFun = (e) => {
        e.preventDefault()
        setList(list.concat(input))
        setInput('')
    }

    const openModal = (value) => {
        setViewModal(true)
        setViewText(value)
    }

    const closeModal = () => {
        setViewModal(false)
    }

    return (
        <>
            <div className="container my-5">
                <h3>To Do List</h3>

                <form className='input-group my-5' onSubmit={addFun}>
                    <input type="text" className='form-control' onChange={inputFun} value={input} />
                    <input type="submit" className='btn btn-primary' />
                </form>

                <table className='table table-bordered border border-primary text-center'>
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((value, index) => (
                            <tr key={index}>
                                <td>{value}</td>
                                <td className='d-flex gap-5'>
                                    <button className='flex-grow-1 btn btn-success' onClick={() => openModal(value)}>View</button>
                                    <button className='flex-grow-1 btn btn-warning'>Update</button>
                                    <button className='flex-grow-1 btn btn-danger'>Delete</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal show={viewModal}>
                    <Modal.Header>
                        <h3>Your List</h3>
                        <button className='btn-close' onClick={closeModal}></button>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Your Task : {viewText}</h5>
                    </Modal.Body>
                </Modal>

            </div>
        </>
    )
}

export default Day9_CRUD