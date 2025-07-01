// DIGITAL CLOCK

// import React, { useState } from 'react'

// const Day5_State2 = () => {

//     var [ time, setTime ] = useState(new Date().toLocaleTimeString())

//     setInterval(() => {
//         setTime(new Date().toLocaleTimeString())
//     }, 1000)

//     return (
//         <>
//             <h1>{time}</h1>
//         </>
//     )
// }

// export default Day5_State2

// QR CODE GENERATOR

// import React, { useState } from 'react'

// const Day5_State2 = () => {

//     var [ input, setInput ] = useState('')

//     var [ qr, setQr ] = useState('')

//     const fun = (e) => {
//         setInput(e.target.value)
//     }

//     const generateOR = () => {
//         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
//         setInput('')
//     }

//     return (
//         <>
//             <input type="text" onChange={fun} value={input} />
//             <button onClick={generateOR}>Generate</button>
//             <br /><br />
//             { qr ? <img src={qr} alt="" /> : '' }
//         </>
//     )
// }

// export default Day5_State2