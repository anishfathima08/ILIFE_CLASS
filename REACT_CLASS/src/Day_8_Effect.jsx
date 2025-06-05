// import React, { useState } from 'react'

// const Day_8_Effect = () => {

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

// export default Day_8_Effect

// USE EFFECT 

// useEffect(() => {

// }, [])

// 1. Without Dependency 

// import React, { useEffect, useState } from 'react'

// const Day_8_Effect = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Hello');
//     }, [])    

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//         </>
//     )
// }

// export default Day_8_Effect

// 2 . With Dependecy

// import React, { useEffect, useState } from 'react'

// const Day_8_Effect = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Hello');
//     }, [count])

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//         </>
//     )
// }

// export default Day_8_Effect

// Example - 2

// import React, { useState, useEffect } from 'react'

// const Day_8_Effect = () => {

//     var [ input, setInput ] = useState('')

//     const inputFun = (e) => {
//         setInput(e.target.value)
//     }

//     useEffect(() => {
//         console.log('Hello')
//     }, [])
    
//     return (
//         <>
//             <input type="text" onChange={inputFun} />
//         </>
//     )
// }

// export default Day_8_Effect

// Example - 3

// import React, { useEffect, useState } from 'react'

// const Day_8_Effect = () => {

//   var  [ data, setData ] = useState([])

//   const fetchData = async () => {
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     var value = await url.json();
//     setData(value)

//     // console.log(value);
    
//   }

//   useEffect(() => {
//     fetchData()
//   } , [])

//   return (
//     <>
//       <div className='container'>
//         <div className='row'>
//           {data.map((value, index) => (
//             <div className="col-6 my-3" key={index}>
//               <div className='card'>
//                 <div className='card-body'>
//                   <h3>Name : {value.name}</h3>
//                   <h3>UserName : {value.username}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Day_8_Effect