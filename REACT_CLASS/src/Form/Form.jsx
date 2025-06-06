// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Form = () => {

//     var [ userName, setUserName ] = useState('')
//     var [ password, setPassword ] = useState('')

//     var navigate = useNavigate()

//     const submitFun = (event) => {
//         event.preventDefault()
//         if(userName === 'abc' && password === 'abc@123'){
//             navigate('/submit')
//         }
//         else{
//             alert('Invalid Inputs')
//         }
//     }

//     localStorage.setItem('username', userName)

//     return (
//         <>
//             <form onSubmit={submitFun}>
//                 <label>Enter User Name</label>
//                 <input type="text" onChange={(e) => setUserName(e.target.value)} />
//                 <br /><br />
//                 <label>Enter Password</label>
//                 <input type="text" onChange={(e) => setPassword(e.target.value)} />
//                 <br />
//                 <input type="submit" />
//             </form>
//         </>
//     )
// }

// export default Form


import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    var [ username, setUserName ] = useState('')
    var [ password, setPassword ] = useState('')

    const navigate = useNavigate()

    const submitFun = (event) => {
        event.preventDefault()
        if(username === 'abc' && password === 'abc@123'){
            navigate('/submit')
        }
        else{
            alert('Invalid Inputs')
        }
    }

    localStorage.setItem('username', username)

    return (
        <>
            <form onSubmit={submitFun}>
                <lable>Enter Your Username</lable>
                <input type="text" value={username} onChange={(e) =>setUserName(e.target.value)}/>
                <br />
                <lable>Enter Your Password</lable>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Form