// PROBLEM

// import React, { useState } from 'react'

// const Day7_Effect = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(++count)
//     }

//     console.log('Hello');
    
//     return (
//         <>
//             <h1>{count}</h1>  
//             <button onClick={addFun}>Click</button>
//         </>
//     )
// }

// export default Day7_Effect

// USE EFFECT - 2 TYPES 

// EXAMPLES - LOG, INPUT, API

// EMPTY DEPENDENCY - IT RUNS ONLY WHEN COMPONENT RENDER
// WITH DEPENDENCY - IT RUNS WHEN COMPONENT RENDER AND VALUE CHANGED

// EXAMPLES 

// EMPTY DEPENDENCY

// import React, { useState, useEffect } from 'react'

// const Day7_Effect = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Hello')
//     }, [])
    
//     return (
//         <>
//             <h1>{count}</h1>  
//             <button onClick={addFun}>Click</button>
//         </>
//     )
// }

// export default Day7_Effect

// WITH DEPENDENCY

// import React, { useState, useEffect } from 'react'

// const Day7_Effect = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Hello')
//     }, [count])
    
//     return (
//         <>
//             <h1>{count}</h1>  
//             <button onClick={addFun}>Click</button>
//         </>
//     )
// }

// export default Day7_Effect

// import React, { useState, useEffect } from 'react'

// const Day7_Effect = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(++count)
//     }

//     const fun = () => {
//         console.log('Hello')
//     }

//     useEffect(() => {
//         fun()
//     }, [])
    
//     return (
//         <>
//             <h1>{count}</h1>  
//             <button onClick={addFun}>Click</button>
//         </>
//     )
// }

// export default Day7_Effect

// import React, { useState, useEffect } from 'react'

// const Day7_Effect = () => {

//     var [ input, setInput ] = useState('')

//     const inputFun = (e) => {
//         setInput(e.target.value)
//     }

//     const fun = () => {
//         console.log('Hello')
//     }

//     useEffect(() => {
//         fun()
//     }, [])
    
//     return (
//         <>
//             <input type="text" onChange={inputFun} />
//         </>
//     )
// }

// export default Day7_Effect

// import React, { useState, useEffect } from 'react'

// const Day7_Effect = () => {

//     var [ data, setData ] = useState([])

//     const fetchData = async () => {
//         var url = await fetch('https://jsonplaceholder.typicode.com/users')
//         var value = await url.json()
//         setData(value)
//         console.log(value);
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     {data.map((value, index) => (
//                         <div className="col-6 my-3" key={index}>
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h3>Email : {value.name}</h3>
//                                     <h3>User Name : {value.username}</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Day7_Effect