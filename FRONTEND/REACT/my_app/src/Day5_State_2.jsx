// DIGITAL CLOCK

    // import React, { useState } from 'react'
    
    // const Day5_State_2 = () => {

    // var [time, setTime] = useState(new Date().toLocaleTimeString())

    // const timeFun = () => {
    //     setTime(new Date().toLocaleTimeString())
    // }

    // setInterval(timeFun, 1000)

    //     return (
    //         <>
    //             <h1>{time}</h1>
    //         </>
    //     )
    // }
    
    // export default Day5_State_2


// QR CODE GENERATOR

    // import React, {useState} from 'react'
    
    // const Day5_State_2 = () => {

    //  var [ text, setText ] = useState('')

    //  var [ qr, setQr ] = useState('')

    //  const inputText = (e) => {
    //     setText(e.target.value)
    //  }

        // const generateQR = () => {
        //     setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
        //     setText('')
        // }

        // return (
        //     <>
                // <input type="text" value={text} onChange={inputText} />
        //         <button onClick={generateQR}>Generate</button>
        //         <br />
        //         { qr ?  <img src={qr} alt="" /> : ''}
        //     </>
        // )
    // }
    
    // export default Day5_State_2


// SIMPLE CALCULATOR 

    // import React, { useState } from 'react'
    
    // const Day5_State_2 = () => {

    //     var [ input, setInput ] = useState("")

    //     const display = (e) => {
    //         setInput(input + e.target.value);
    //     }

    //     const sum = () => {
    //         try{
    //             setInput(eval(input))
    //         }
    //         catch{
    //             alert('Invalid Expression')
    //             setInput('')
    //         }
    //     }

    //     const allClear = () => {
    //         setInput('')
    //     }

    //     const deleteNum = () => {
    //         setInput(input.slice(0, -1))
    //     }

    //     return (
    //         <>
    //             <div>
    //                 <input type="text" value={input} readOnly />
    //             </div>
    //             <div>
    //                 <input type="button" value='1' onClick={display}/>
    //                 <input type="button" value='2' onClick={display}/>
    //                 <input type="button" value='3' onClick={display}/>
    //                 <input type="button" value='4' onClick={display}/>
    //             </div>
    //             <div>
    //                 <input type="button" value='5' onClick={display}/>
    //                 <input type="button" value='6' onClick={display}/>
    //                 <input type="button" value='7' onClick={display}/>
    //                 <input type="button" value='8' onClick={display}/>
    //             </div>
    //             <div>
    //                 <input type="button" value='9' onClick={display}/>
    //                 <input type="button" value='0' onClick={display}/>
    //                 <input type="button" value='00' onClick={display}/>
    //                 <input type="button" value='.' onClick={display}/>
    //             </div>
    //             <div>
    //                 <input type="button" value='+' onClick={display}/>
    //                 <input type="button" value='-' onClick={display}/>
    //                 <input type="button" value='*' onClick={display}/>
    //                 <input type="button" value='/' onClick={display}/>
    //             </div>
    //             <div>
    //                 <input type="button" value='=' onClick={sum}/>
    //                 <input type="button" value='AC' onClick={allClear}/>
    //                 <input type="button" value='DE' onClick={deleteNum}/>
    //             </div>
    //         </>
    //     )
    // }
    
    // export default Day5_State_2