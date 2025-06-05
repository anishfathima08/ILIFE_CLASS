// import React from 'react'
// import Day10_Context_2 from './Day10_Context_2.jsx';

// const Day10_Context_1 = () => {

//     var value = 10;

//     return (
//         <>
//             <Day10_Context_2 value={value} />
//         </>
//     )
// }

// export default Day10_Context

// import React from 'react'
// import Day10_Context_1 from './Day10_Context_1';

// const Day10_Context = () => {

//     var num = 10;

//     return (
//         <>
//             <Day10_Context_1 value={num} />
//         </>
//     )
// }

// export default Day10_Context

import React, { createContext } from 'react'

export const myContext = createContext()

const Day10_Context = ({children}) => {

  var num = 10;

  return (
    <myContext.Provider value={{num}}>
      {children}  
    </myContext.Provider>
  )
  
}

export default Day10_Context

// import React, { createContext, useState } from 'react'

// export const myContext = createContext()

// const Day10_Context = ({children}) => {

//     var [ count, setCount ] = useState(0)

//     const addFun = () => {
//         setCount(count + 1)
//     }

//     const removeFun = () => {
//         setCount(count - 1)
//     }

    // const myContextValue = {
    //     count, 
    //     addFun, 
    //     removeFun
    // }

//     return (
//         <myContext.Provider value={myContextValue}>
//             {children}
//         </myContext.Provider>
//     )
// }

// export default Day10_Context

// import React, { createContext } from 'react'
// import Day10_Context_2 from './Day10_Context_2';

// export const myContext = createContext()

// const Day10_Context_1 = () => {

//     var value = 10;

//     return (
//         <>
//             <myContext.Provider value={value}>
//                 <Day10_Context_2 />
//             </myContext.Provider>

//         </>
//     )
// }


// export default Day10_Context_1


import React from 'react'

const Day10_Context = () => {
  return (
    <div>Day10_Context</div>
  )
}

export default Day10_Context