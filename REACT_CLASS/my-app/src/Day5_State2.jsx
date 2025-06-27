// Color Toggle 

// import React, { useState } from 'react'

// const Day5_State2 = () => {

//     const [ bgColor, setBgColor ] = useState('blue')

//     const changeColor = () => {
//         const newColor = bgColor === 'blue' ? 'red' : 'blue'
//         setBgColor(newColor)
//     }

//     return (
//         <>
//             <h1 style={{ backgroundColor : bgColor }}>Background Color Change</h1>
//             <button onClick={changeColor}>Color Change</button>
//         </>
//     )
// }

// export default Day5_State2

// Theme Toggle

// import React, { useState } from 'react'

// const Day5_State2 = () => {

//     const [ theme, setTheme ] = useState(true)

//     const themeStyle = {
//         backgroundColor :  theme ? 'black' : 'white',
//         color : theme ? 'white' : 'black',
//         padding : '40px'
//     }

//     const themeToggle = () => {
//         setTheme(!theme)
//     }

//     return (
//         <>
//             <p style={themeStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea expedita porro eos nam soluta perspiciatis, quas veritatis excepturi impedit dicta blanditiis saepe doloribus eligendi, eveniet illum distinctio deserunt velit. Maiores, culpa quaerat deserunt voluptatum necessitatibus repellat eligendi suscipit, aspernatur eum assumenda voluptatem laborum? Assumenda sequi repellat maiores in temporibus?</p>
//             <button onClick={themeToggle}>{ theme ? 'Light Theme' : 'Dark Theme' }</button>
//         </>
//     )
// }

// export default Day5_State2

// DIGITAL CLOCK 

// import React, { useState } from 'react'

// const Day5_State2 = () => {

//     var [time, setTime] = useState(new Date().toLocaleTimeString())

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

// export default Day5_State2

// OR CODE GENERATOR 

// import React, {useState} from 'react'

// const Day5_State2 = () => {

//     var [ text, setText ] = useState('')

//     var [ qr, setQr ] = useState('')

//     const inputText = (e) => {
//         setText(e.target.value)
//     }

//     const generateQR = () => {
//         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
//         setText('')
//     }

//     return (
//         <>
//             <input type="text" value={text} onChange={inputText} />
//             <button onClick={generateQR}>Generate</button>
//             <br /><br />
//             { qr ?  <img src={qr} alt="" /> : ''}
//         </>
//     )
// }

// export default Day5_State2

import React from 'react'

const Day5_State2 = () => {

    const inputText = (e) => {
        console.log(e.target.value)
    }

    const generateQR = () => {
        
    }

    return (
        <>
            <input type="text" onChange={inputText} />
            <button onClick={generateQR}>Generate</button>

        </>
    ) 
}

export default Day5_State2