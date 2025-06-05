// import React, { useState } from 'react'

// const Day_5_State_2 = () => {

//     var [ time, setTime ] = useState(new Date().toLocaleTimeString())

//     const timeFun = () => {
//         setTime(new Date().toLocaleTimeString())
//     }

//     setInterval(timeFun, 1000)

//     return (
//         <>
//             <h1>{time}</h1>
//         </>
//     )
// }

// export default Day_5_State_2

// import React, { useState } from 'react'

// const Day_5_State_2 = () => {

//     var [ text, setText ] = useState('')

//     var [ qr, setQr ] = useState('')

//     const fun = (e) => {
//         setText(e.target.value)
//     }

//     const qrFun = () => {
//         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${text}`)
//         setText('')
//     }

//     return (
//         <>
//             <input type="text" value={text} onChange={fun}/>
//             <button onClick={qrFun}>Generate</button>
//             <br />
//             { qr ? <img src={qr} alt="" /> : '' }
//         </>
//     )
// }

// export default Day_5_State_2


// import React, { useState } from 'react'

// const Day_5_State_2 = () => {

//     var [ input, setInput ] = useState('')

//     const display = (e) => {
//         setInput(input + e.target.value)
//     }       

//     const sumFun = () => {
//         try{
//             setInput(eval(input))
//         }
//         catch{
//             alert('Invalid Expression')
//         }
//     }

//     const allClear = () => {
//         setInput('')
//     }

//     const deleteFun = () => {
//         setInput(input.slice(0, -1))
//     }

//     return (
//         <>
//             <div>
//                 <input type="text" value={input} readOnly />
//             </div>
//             <div>
//                 <input type="button" onClick={display} value='1'/>
//                 <input type="button" onClick={display} value='2' />
//                 <input type="button" onClick={display} value='3' />
//                 <input type="button" onClick={display} value='4' />
//             </div>
//             <div>
//                 <input type="button" onClick={display} value='5' />
//                 <input type="button" onClick={display} value='6' />
//                 <input type="button" onClick={display} value='7' />
//                 <input type="button" onClick={display} value='8' />
//             </div>
//             <div>
//                 <input type="button" onClick={display} value='9' />
//                 <input type="button" onClick={display} value='0' />
//                 <input type="button" onClick={display} value='00' />
//                 <input type="button" onClick={display} value='.' />
//             </div>
//             <div>
//                 <input type="button" onClick={display} value='+' />
//                 <input type="button" onClick={display} value='-' />
//                 <input type="button" onClick={display} value='*' />
//                 <input type="button" onClick={display} value='/' />
//             </div>
//             <div>
//                 <input type="button" value='=' onClick={sumFun} />
//                 <input type="button" value='AC' onClick={allClear} />
//                 <input type="button" value='DE' onClick={deleteFun}/>
//             </div>
//         </>
//     )
// }

// export default Day_5_State_2