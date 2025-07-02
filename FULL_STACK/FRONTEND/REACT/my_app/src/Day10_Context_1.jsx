import React from 'react'
import Day_10_Context_2 from './Day_10_Context_2'

const Day10_Context_1 = ({value}) => {
    return (
        <>
            <h1>{value}</h1>
            <Day_10_Context_2 value1={value}/>
        </>
    )
}

export default Day10_Context_1

// import React, {useContext} from 'react'
// import { myContext } from './Day10_Context'

// const Day10_Context_1 = () => {

//     const { num } = useContext(myContext)

//     return (
//         <>
//             <h1>{num}</h1>
//         </>
//     )
// }

// export default Day10_Context_1

// import React, { useContext } from 'react'
// import { myContext } from './Day10_Context'

// const Day10_Context_1 = () => {

//     const { addFun, removeFun } = useContext(myContext)

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day10_Context_1 