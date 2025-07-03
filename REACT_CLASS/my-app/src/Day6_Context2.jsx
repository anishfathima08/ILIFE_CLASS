// EXAMPLE 1
// TYPE 1

// import React, { createContext } from 'react'

// export const myContext = createContext()

// const Day6_Context2 = ({children}) => {

//     var num1 = 10;
//     var num2 = 20;

//     return (
//         <myContext.Provider value={{ num1, num2 }}>
//             {children}
//         </myContext.Provider>
//     )
// }

// export default Day6_Context2

// TYPE - 2

// import React, { createContext } from 'react'

// export const myContext = createContext()

// const Day6_Context2 = ({children}) => {

//     var num1 = 10;
//     var num2 = 20;

//     const myContextValue = {
//         num1,
//         num2
//     }

//     return (
//         <myContext.Provider value={myContextValue}>
//             {children}
//         </myContext.Provider>
//     )
// }

// export default Day6_Context2

// EXAMPLE - 2
// TYPE - 1

// import React, { createContext, useState } from 'react'

// export const myContext = createContext()

// const Day6_Context2 = ({children}) => {

//     var [ count, setCount ] = useState(0)

//     const addFun = () => {
//         setCount(++count)
//     }

//     const subFun = () => {
//         setCount(--count)
//     }
    
//     return (
//         <myContext.Provider value={{ count, addFun, subFun }}>
//             {children}
//         </myContext.Provider>
//     )
// }

// export default Day6_Context2

// TYPE - 2 

// import React, { createContext, useState } from 'react'

// export const myContext = createContext()

// const Day6_Context2 = ({children}) => {

//     var [ count, setCount ] = useState(0)

//     const addFun = () => {
//         setCount(++count)
//     }

//     const subFun = () => {
//         setCount(--count)
//     }



//     const myContextValue = {
//         count, 
//         addFun, subFun
//     }
    
//     return (
//         <myContext.Provider value={myContextValue}>
//             {children}
//         </myContext.Provider>
//     )
// }

// export default Day6_Context2