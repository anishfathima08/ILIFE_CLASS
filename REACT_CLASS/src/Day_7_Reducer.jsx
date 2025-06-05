// import React, { useState } from 'react'

// const Day_7_Reducer = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(++count)
//     }

//     const removeFun = () => {
//         setCount(--count)
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={addFun}>Add</button>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day_7_Reducer

// import React, { useReducer } from 'react'

// const Day_7_Reducer = () => {

//     const reducerFun = ( state, action ) => {
//         if(action.type === 'add'){
//             return { count : state.count + 1 }
//         }
//         else if(action.type === 'remove'){
//             return { count : state.count - 1 }
//         }
//     }

//     const [ state, dispatch ] = useReducer( reducerFun, { count : 1 })

//     const addFun = () => {
//         dispatch({ type : 'add'})
//     }

//     const removeFun = () => {
//         dispatch({ type : 'remove' })
//     }

//     return (
//         <>
//             <h1>{state.count}</h1>
//             <button onClick={addFun}>Add</button>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day_7_Reducer





// import React, { useReducer } from 'react'

// const Day_7_Reducer = () => {

//     const myFun = ( a, b ) => {
//         // console.log(a); // { num : 1 }
//         // console.log(b); // undefined => { type : 'hi }
//         // console.log(b.type); // undefined => hi
//         if(b.type === 'hi'){
//             return { num : a.num + 1 }
//         }
//     }

//     var [ count, setCount ] = useReducer(myFun, { num : 1 })

//     // console.log(count); // { num : 1 }
//     // console.log(count.num); // 1
    
//     const addFun = () => {
//         setCount({ type : 'hi' })
//     }

//     return (
//         <>
//             <h1>{count.num}</h1>
//             <button onClick={addFun}>Add</button>
//         </>
//     )
// }

// export default Day_7_Reducer












// import React, { useReducer } from 'react';

// const Day_7_Reducer = () => {

//     const reducerFun = (a, action) => {
//         switch (action.type) {
//             case 'TOGGLE':
//                 return { obj: !a.obj };
//             default:
//                 return a;
//         }
//     };

//     const [state, dispatch] = useReducer(reducerFun, { obj: true });

//     const fun = () => {
//         dispatch({ type: 'TOGGLE' });
//     };

//     return (
//         <>
//             <button onClick={fun}>Click</button>
//             <h1>{state.obj && 'Hello'}</h1>
//         </>
//     );
// };

// export default Day_7_Reducer;



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




// // EXAMPLE - 3

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