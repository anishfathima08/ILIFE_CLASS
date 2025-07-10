// USE REF 

// import React, { useRef } from 'react'

// const Day8_Ref = () => {

//     var reference = useRef()

//     const fun = () => {
//         reference.current.style.backgroundColor = 'blue'
//     }

//     return (
//         <>
//             <p ref={reference}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quisquam, atque, repudiandae magnam corporis fugiat sunt ea voluptate numquam, tenetur tempora eveniet iure a quod rerum amet minus. Quam distinctio, maiores fugit voluptas consectetur doloribus numquam labore, culpa nostrum beatae ipsum, perferendis ratione quibusdam! Voluptatibus officia quia repudiandae deserunt eveniet.</p>

//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day8_Ref 

// import React, { useRef } from 'react'

// const Day8_Ref = () => {

//     var refernce = useRef()

//     const fun = () => {
//         refernce.current.style.display = 'none'
//     }

//     return (
//         <>
//             <p ref={refernce}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores soluta magni, ratione numquam quas eaque reprehenderit inventore aliquam adipisci cum tempora similique. Maxime enim dolore explicabo odio quod ad veniam cumque, doloribus vero quidem labore accusantium reiciendis porro nam repellendus assumenda itaque corrupti quis debitis odit. Error, laudantium similique.</p>
            
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day8_Ref

// import React, { useRef, useEffect } from 'react'

// const Day8_Ref = () => {

//     var reference = useRef()

//     const inputFun = () => {
//         reference.current.focus()
//     }

//     useEffect(() => {
//         inputFun()
//     }, [])

//     return (
//         <>
//             <input type="text" ref={reference} />
//         </>
//     )
// }

// export default Day8_Ref