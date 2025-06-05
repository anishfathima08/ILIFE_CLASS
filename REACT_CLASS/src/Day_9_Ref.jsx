// Use Ref

// Example - 1

// import React, { useRef } from "react";

// const Day_9_Ref = () => {

//   const reference = useRef("");

//   const refFun = () => {
//     reference.current.style.background = "red"
//   }

//   return (
//     <>
//       <button onClick={refFun}>Change Color</button>

//       <div ref={reference}>Box</div>
//     </>
//   );
// };

// export default Day_9_Ref;

// import React, { useRef } from 'react'

// const Day_9_Ref = () => {

//     var abc = useRef()

//     const refFun = () => {
//         abc.current.style.backgroundColor = 'blue'
//     }

//     return (
//         <>
//             <button onClick={refFun}>Click</button>
//             <h1 ref={abc}>Hello</h1>
//         </>
//     )
// }

// export default Day_9_Ref

// Example - 2

// import React, { useRef } from "react";

// const Day_9_Ref = () => {
//   const reference = useRef();

//   const handleHide = () => {
//     reference.current.style.display = "none";
//   };

//   return (
//     <>
//       <p ref={reference}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laborum, asperiores reprehenderit mollitia libero quidem neque placeat, aliquid, commodi aspernatur culpa. Doloremque autem ipsam culpa. Modi, odit? Accusantium necessitatibus voluptatum perferendis fugiat optio illo exercitationem, minima sunt, sed fuga ipsam eos quis veritatis distinctio natus omnis ipsum maxime saepe quas!</p>
//       <button onClick={handleHide}>Hide Paragraph</button>
//     </>
//   );
// };

// export default Day_9_Ref;

// Example - 3

// import React, { useRef } from 'react'

// const Day_9_Ref = () => {

//   const reference = useRef()

//   const refFun = () => {
//     reference.current.style.width = '350px'
//   }

//   return (
//     <>
//       <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" ref={reference} width='250'/>
//       <br />
//       <button onClick={refFun}>Click</button>
//     </>
//   )
// }

// export default Day_9_Ref

// Example - 4 

// import React, { useEffect, useRef } from 'react'

// const Day_9_Ref = () => {

//   const reference = useRef()

//   // const refFun = () => {
//   //   reference.current.focus()
//   // }

//   useEffect(() => {
//     reference.current.focus()
//   }, [])

//   return (
//     <>
//       <input type="text" ref={reference} />
//       {/* <button onClick={refFun}>Click</button> */}
//     </>
//   )
// }

// export default Day_9_Ref

import React, { useRef, useEffect } from 'react'

const Day_9_Ref = () => {

    var inputFocus = useRef()

    useEffect(() => {
        inputFocus.current.focus()
    }, [])

    return (
        <>
            <input type="text" ref={inputFocus} />
        </>
    )
}

export default Day_9_Ref