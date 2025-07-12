import React, { useContext } from 'react'
import { myContext } from './Context'

const Form = () => {

    const { username, setUsername, password, setPassword, submitFun } = useContext(myContext)

    return (
        <>
            <form className="container p-5" onSubmit={submitFun}>
                <label className='form-label'>Enter UserName</label>
                <input type="text" className='form-control mb-4' value={username} onChange={(e) => setUsername(e.target.value) } />
                <label className='form-label'>Enter Password</label>
                <input type="password" className='form-control mb-4' value={password} onChange={(e) => setPassword(e.target.value) }  />
                <input type="submit" className='form-control btn btn-primary' />
            </form>
        </>
    )
}

export default Form