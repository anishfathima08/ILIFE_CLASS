import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Day9_CRUD = () => {

    var [ input, setInput ] = useState('')
    var [ list, setList ] = useState([])

    var [ viewModal, setViewModal ] = useState(false)
    var [ viewText, setViewText ] = useState('')

    var [ edit, setEdit ] = useState('')
    var [ editText, setEditText ] = useState('')

    const inputFun = (e) => {
        setInput(e.target.value)
    }

    const addFun = (e) => {
        e.preventDefault()
        setList(list.concat(input))
        setInput('')
    }

    const viewFun = (value) => {
        setViewModal(true)
        setViewText(value)
    }

    const closeModal = () => {
        setViewModal(false)
    }

    const deleteFun = (index) => {
        setList(list.filter((value, i) => i !== index ))
    }

    const editFun = (index) => {
        setEdit(index)
        setEditText(list[index])
    }

    const editInputFun = (e) => {
        setEditText(e.target.value)
    }

    const updateFun = () => {
        setList(list.map((value, index) => edit == index ? editText : value))  
        setEdit('')
    }

    return (
        <>
            <div className="container my-5">
                <h3>To Do List</h3>
                
                <form className='input-group my-5' onSubmit={addFun}>
                    <input type="text" className='form-control' onChange={inputFun} value={input} />
                    <input type="submit" className='btn btn-primary' />
                </form>

                { list.length === 0
                ?   <p className='text-center text-danger'>No Task Found</p>
                :    <table className='table table-bordered border-primary text-center'>
                        <thead>
                            <tr>
                                <th>List</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((value, index) => (
                                <tr>
                                    <td>
                                        {
                                            edit === index 
                                            ? <input type='text' className='form-control' onChange={editInputFun} value={editText} />
                                            : value
                                        }
                                    </td>
                                    <td className='d-flex gap-5'>
                                        <button className='flex-grow-1 btn btn-primary' onClick={() => viewFun(value)}>View</button>

                                        { 
                                            edit === index 
                                            ? <button className='flex-grow-1 btn btn-warning' onClick={updateFun}>Update</button>
                                            : <button className='flex-grow-1 btn btn-warning' onClick={() => editFun(index)}>Edit</button>
                                        }
                                        
                                        <button className='flex-grow-1 btn btn-danger' onClick={() => deleteFun(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }

                <Modal show={viewModal}>
                    <Modal.Header>
                        <h3>Your List</h3>
                        <button className='btn btn-close' onClick={closeModal}></button>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>{viewText}</h3>
                    </Modal.Body>
                </Modal>
                
            </div>
        </>
    )
}

export default Day9_CRUD