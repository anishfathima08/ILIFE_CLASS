// USE STATE ( Count Increase, Count Decrease, With Limit, Hide Show Text, Password Hide Show, Toggle Theme )

// ADD COUNTER WITHOUT USE STATE

    // import React from 'react'

    // const Day4_State_1 = () => {
    //     var num = 1;

    //     const addFun = () => {
    //         num = num + 1;
    //         console.log(num)
    //     }

    //     return (
    //         <>
    //         <h1>{num}</h1>
    //         <button onClick={addFun}>Add</button>
    //         </>
    //     )
    // }

    // export default Day4_State_1

// ADD & REMOVE COUNTER WITH USE STATE

    // import React, { useState } from 'react'

    // const Day4_State_1 = () => {

    //   var [num, setNum] = useState(1)

    //   const addFun = () => {
    //     setNum(num+1)
    //   }

    //   const removeFun = () => {
    //     setNum(num-1)
    //   }

    //   return (
    //     <>
    //       <h1>{num}</h1>
    //       <button onClick={addFun}>Add</button>
    //       <button onClick={removeFun}>Remove</button>
    //     </>
    //   )
    // }

    // export default Day4_State_1

// TASK ( COUNTER WITH LIMIT )

    // import React, { useState } from 'react'

    // const Day4_State_1 = () => {

    //   var [num, setNum] = useState(0);
    //   var [error, setError ] = useState('');

    //   const addFun = () => {
    //     if(num < 10){
    //       setNum(num+1)
    //       setError('')
    //     }
    //     else{
    //       setError('Maximum Limit')
    //     }
    //   }

    //   const removeFun = () => {
    //     if(num > 0){
    //       setNum(num-1)
    //       setError('')
    //     }
    //     else{
    //       setError('Minimum Limit')
    //     }
    //   }

    //   return (
    //     <>
    //       <h1>{num}</h1>
    //       <button onClick={addFun}>Add</button>
    //       <button onClick={removeFun}>Remove</button>
    //       <p>{error}</p>
    //     </>
    //   )
    // }

    // export default Day4_State_1

// HIDE SHOW TEXT

    // import React, { useState } from 'react';

    // const Day4_State_1 = () => {
    //   const [isVisible, setIsVisible] = useState(true); 
    
    //   const toggleVisibility = () => {
    //     setIsVisible(!true); 
    //   };
    
    //   return (
    //     <div>
    //       <button onClick={toggleVisibility}>
    //         {isVisible ? 'Hide' : 'Show'} Text
    //       </button>
    //        <h1>{isVisible && 'This is some text that can be shown or hidden.'}</h1>
    //     </div>
    //   );
    // };
    
    // export default Day4_State_1;

// HIDE SHOW PASSWORD

    // import React, { useState } from 'react'
    
    // const Day4_State_1 = () => {

    //     var [show, setShow] = useState(false)

    //     // const showPassoword = () => {
    //     //     setShow(!show)
    //     // }

    //     return (
    //         <>
    //             <input type={show ? 'text' : 'password'} />
    //             {/* <button onClick={showPassoword}>{show ? 'Hide' : 'Show'}</button> */}
    //             <button onClick={() => {setShow(!show)}}>{show ? 'Hide' : 'Show'}</button>
    //         </>
    //     )
    // }
    
    // export default Day4_State_1

// COLOR TOGGLE 

    // import React, { useState } from 'react'
    
    // const Day4_State_1 = () => {
    //     const [bgColor, setBgColor] = useState('blue');

    //     const changeColor = () => {
    //         const newColor = bgColor === 'blue' ? 'green' : 'blue';
    //         setBgColor(newColor);
    //     };

    //     return (
    //         <div style={{ backgroundColor: bgColor, padding : '30px' }}>
    //         <h2>Background Color Changer</h2>
    //         <button onClick={changeColor}>Change Color</button>
    //         </div>
    //     );
    // }
    
    // export default Day4_State_1

// TOGGLE THEME

    // import React, {useState} from 'react'
    
    // const Day4_State_1 = () => {

    //     var [ darkMode, setDarkMode ] = useState(true)

    //     var themeStyle = {
    //         color : darkMode ? 'white' : 'black',
    //         backgroundColor : darkMode ? 'black' : 'white',
    //         padding : '30px'
    //     }

    //     const themeToggle = () => {
    //         setDarkMode(!darkMode)
    //     }

    //     return (
    //         <>
    //             <p style={themeStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga sed ut aspernatur eius voluptas qui quis? Sit nisi qui possimus doloribus ea! Distinctio libero similique id repudiandae dicta ad ducimus facilis odio atque tempora magni mollitia ipsum aliquam repellendus, omnis doloremque consequatur delectus earum, iusto corporis pariatur! Voluptatum, nobis.</p>

    //             <button onClick={themeToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    //         </>
    //     )
    // }
    
    // export default Day4_State_1