// EXAMPLE - 1

// import React, { useState } from 'react'

// const Day8_Reducer = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(++count)
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={addFun}>Add</button>
//         </>
//     )
// }

// export default Day8_Reducer 

// import React, { useReducer } from 'react'

// const Day8_Reducer = () => {

//     const reducerFun = ( state, action ) => {
//         // console.log(state))
//         // console.log(action)
//         // console.log(action.type)
//         // switch(action.type){
//         //     case 'add' : 
//         //         return { count : state.count + 1 }
//         // }

//         if(action.type === 'add'){
//             return { count : state.count + 1 }
//         }
//         else if(action.type === 'sub'){
//             return { count : state.count - 1 }
//         }
//     }

//     const  [ state, dispatch ] = useReducer(reducerFun, { count : 1 })

//     // console.log(state);
//     // console.log(state.count);
    
//     const addFun = () => {
//         dispatch({type : 'add' })
//     }

//     const subFun = () => {
//         dispatch({type : 'sub'})
//     }

//     return (
//         <>
//             <h1>{state.count}</h1>
//             <button onClick={addFun}>Add</button>
//             <button onClick={subFun}>Sub</button>
//         </>
//     )
// }

// export default Day8_Reducer

// import React, { useReducer } from 'react'

// const Day8_Reducer = () => {

//     var obj = {
//         add : 'add',
//         sub : 'sub',
//         multiple : 'multiple'
//     }

//     const reducerFun = (state, action) => {
//         switch(action.type){
//             case obj.add:
//                 return { count : state.count + 1 }
//             case obj.sub:
//                 return { count : state.count - 1 }
//             case obj.multiple:
//                 return { count : state.count * 2 }
//         }
//     }

//     var [ state, dispatch ] = useReducer(reducerFun, { count : 1 })

//     const addFun = () => {
//         dispatch({type : obj.add})
//     }

//     const subFun = () => {
//         dispatch({type : obj.sub})
//     }

//     const multipleFun = () => {
//         dispatch({type : obj.multiple})
//     }

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <button onClick={subFun}>Sub</button>
//             <button onClick={multipleFun}>Mulitple</button>
//             <h1>{state.count}</h1>
//         </>
//     )
// }

// export default Day8_Reducer


// EXAMPLE - 2 

// import React, { useReducer } from 'react'

// const Day_7_Reducer = () => {

//     const reducerFun = ( state, action ) => {
//         if(action.type === 'toggle'){
//             return { obj : !state.obj }
//         }
//     }

//     var [ state, dispatch ] = useReducer(reducerFun , { obj : true })

//     const toggleFun = () => {
//         dispatch({ type : 'toggle' })
//     }

//     return (
//         <>
//             <button onClick={toggleFun}>Click</button>
//             { (state.obj) ? <h1>Hello</h1> : '' }
//         </>
//     )
// }

// export default Day_7_Reducer


// EXAMPLE - 3

//     import React, { useReducer } from 'react'

//     const Day_7_Reducer = () => {

//         const reducerFun = (state, action) => {
//             switch (action.type) {
//                 case 'TOGGLE':
//                     return { show: !state.show };
//                 default:
//                     return state;
//             }
//         };

//         const [state, dispatch] = useReducer(reducerFun, { show: false });

//         return (
//             <>
//                 <input type={state.show ? 'text' : 'password'} />
//                 <button onClick={() => dispatch({ type: 'TOGGLE' })}>Click</button>
//             </>
//         );
//     };

//     export default Day_7_Reducer