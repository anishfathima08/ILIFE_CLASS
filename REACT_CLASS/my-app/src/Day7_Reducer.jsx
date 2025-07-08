// USE REDUCER - ALTERNATE WAY FOR USE STATE

// import React, { useState } from 'react'

// const Day8_Reducer = () => {

//     var [ count, setCount ] = useState(0)

//     const addFun = () => {
//         setCount(++count)
//     }

//     const removeFun = () => {
//         setCount(--count)
//     }

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <h1>{count}</h1>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day8_Reducer

// EXAMPLE 1 

// import React, { useReducer } from 'react'

// const Day8_Reducer = () => {

//     const reducerFun = ( state, action) => {
//         // console.log('Hello')
//         // console.log(state)
//         // console.log(state.count)
//         // console.log(action)
//         // console.log(action.type)
        
//         if(action.type === 'add'){
//             return { count : state.count + 1 }
//         }
//         else if(action.type === 'remove'){
//             return { count : state.count - 1 }
//         }
//     }

//     var [ state, dispatch ] = useReducer(reducerFun, { count : 1 })

//     // console.log(state) // { count : 1 }
//     // console.log(state.count) // 1

//     const addFun = () => {
//         dispatch({type : 'add'})
//     }

//     const removeFun = () => {
//         dispatch({type : 'remove'})
//     }

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <h1>{state.count}</h1>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day8_Reducer 

// EXAMPLE 2 

// import React, { useReducer } from 'react'

// const Day8_Reducer = () => {

//     const reducerFun = (state, action) => {
//         if(action.type === 'show'){
//             return { input : !state.input }
//         }
//     }

//     var [ state, dispatch ] = useReducer(reducerFun, { input : false })

//     const fun = () => {
//         dispatch({ type : 'show' })
//     }

//     return (
//         <>
//             <input type={ state.input ? 'text' : 'password' } />
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day8_Reducer