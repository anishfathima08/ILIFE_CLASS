// Use Ref

// Example - 1

// import React, { useRef } from "react";

// const Day9_Ref = () => {

//   const reference = useRef("");

//   const refFun = () => {
//     reference.current.style.background = "red"
//   }

//   return (
//     <>
//       <button onClick={refFun}>
//         Change Color
//       </button>

//       <div ref={reference}>Box</div>
//     </>
//   );
// };

// export default Day9_Ref;

// Example - 2

// import React, { useRef } from "react";

// const Day9_Ref = () => {
//   const reference = useRef();

//   const handleHide = () => {
//     reference.current.style.display = "none";
//   };

//   return (
//     <>
//       <p ref={reference}>I am a paragraph!</p>
//       <button onClick={handleHide}>Hide Paragraph</button>
//     </>
//   );
// };

// export default Day9_Ref;

// Example - 3

// import React, { useRef } from 'react'

// const Day9_Ref = () => {

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

// export default Day9_Ref

// Example - 4 

// import React, { useEffect, useRef } from 'react'

// const Day9_Ref = () => {

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

// export default Day9_Ref