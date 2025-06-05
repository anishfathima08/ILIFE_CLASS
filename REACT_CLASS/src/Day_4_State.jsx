// USE STATE - HOOK 

// import React from 'react'

// const Day_4_State = () => {

//     var a = 1;

//     const fun = () => {
//         a++;
//         console.log(a);
//     }

//     return (
//         <>
//             <h1>{a}</h1>
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day_4_State

// import React, { useState } from 'react'

// const Day_4_State = () => {

//     // var num = 10;

//     // var [ variable_name, function ] = useState(value)   

//     var [ num, setNum ] = useState(1)

//     const fun = () => {
//         setNum(num++)
//     }

//     return (
//         <>
//             <h1>{num}</h1>
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day_4_State

// import React, { useState } from 'react'

// const Day_4_State = () => {

//     let [ a, setA ] = useState(1)

//     const addFun = () => {
//         if(a < 10){
//             setA(++a)
//         }
//     }

//     const removeFun = () => {
//         if(a > 0 ){
//             setA(--a)
//         }
//     }

//     return (
//         <>
//             <h1>{a}</h1>
//             <button onClick={addFun}>Add</button>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day_4_State

// import React, { useState } from 'react'

// const Day_4_State = () => {

//     var [ show, setShow ] = useState(true)

//     const fun = () => {
//         setShow(!show) // true
//     }

//     return (
//         <>
//             <button onClick={fun}>{show ? 'Hide' : 'Show'}</button>

//             <h1>{show ? 'hello' : ''}</h1>
//         </>
//     )
// }

// export default Day_4_State

// import React, { useState } from 'react'

// const Day_4_State = () => {

//     var [ show, setShow ] = useState(false)

//     const fun = () => {
//         setShow(!show) 
//     }

//     return (
//         <>
//             <input type={show ? 'text' : 'password'} />
//             <button onClick={fun}>{ show ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}</button>
//         </>
//     )
// }

// export default Day_4_State 