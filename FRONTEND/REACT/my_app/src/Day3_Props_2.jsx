// VARIABLES (PROPS)

    // import React from 'react'

    // const Day3_Props_2 = (props) => {
    //   return (
    //     <>
    //         <h1>User Name : {props.user_name}</h1>
    //         <h1>User Age : {props.user_age}</h1>
    //         <h1>User Address : {props.user_place}</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// VARIABLES PROPS USING DESTRUCTURING

    // import React from 'react'

    // const Day3_Props_2 = ({user_name , user_age , user_place}) => {
    //   return (
    //     <>
    //         <h1>User Name : {user_name}</h1>
    //         <h1>User Age : {user_age}</h1>
    //         <h1>User Address : {user_place}</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// DIRECT (PROPS) 

    // import React from 'react'
    
    // const Day3_Props_2 = (props) => {
    //   return (
    //     <>
    //         <h1>{props.name}</h1>
    //         <h1>{props.age}</h1>
    //     </>
    //   )
    // }
    
    // export default Day3_Props_2

// DIRECT PROPS USING DESTRUCTURING

    // import React from 'react'
    
    // const Day3_Props_2 = ({ name , age }) => {
    //   return (
    //     <>
    //         <h1>{name}</h1>
    //         <h1>{age}</h1>
    //     </>
    //   )
    // }
    
    // export default Day3_Props_2

// ARRAY (PROPS)

    // import React from 'react'

    // const Day3_Props_2 = (props) => {
    //   return (
    //     <>
    //         <h1>Course Name</h1>
    //         <ul>
    //             <li>{props.array_value[0]}</li>
    //             <li>{props.array_value[1]}</li>
    //             <li>{props.array_value[2]}</li>
    //             <li>{props.array_value[3]}</li>
    //             <li>{props.array_value[4]}</li>
    //         </ul>
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// ARRAY PROPS USING DESTRUCTURING

    // import React from 'react'

    // const Day3_Props_2 = ({array_value}) => {
    //   return (
    //     <>
    //       <h1>Course Name</h1>
    //         <ul>
    //             <li>{array_value[0]}</li>
    //             <li>{array_value[1]}</li>
    //             <li>{array_value[2]}</li>
    //             <li>{array_value[3]}</li>
    //             <li>{array_value[4]}</li>
    //         </ul>
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// ARRAY MAP (PROPS)

    // import React from 'react'

    // const Day3_Props_2 = (props) => {
    //     return (
    //         <>
    //             <h1>Course Name</h1>
    //             <ul>
    //                 {props.array_value.map((value , index) => {
    //                     return(
    //                         <li key={index}>{value}</li>
    //                     )
    //                 })}
    //             </ul>
    //         </>
    //     )
    // }

    // export default Day3_Props_2

// ARRAY MAP (PROPS) USING DESTRUCTURING
    
    // import React from 'react'

    // const Day3_Props_2 = ({array_value}) => {
    //   return (
    //     <>
    //         <h1>Course Name</h1>
    //         <ul>
    //             {array_value.map((value , index) => {
    //                 return(
    //                     <li key={index}>{value}</li>
    //                 )
    //             })}
    //         </ul>
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// OBJECT (PROPS)

    // import React from 'react'

    // const Day3_Props_2 = (props) => {
    // return (
    //     <>
    //         <h1>User Name : {props.object_value.name}</h1>
    //         <h1>User Age : {props.object_value.age}</h1>
    //         <h1>User Place : {props.object_value.place}</h1>
    //     </>
    // )
    // }

    // export default Day3_Props_2

// OBJECT PROPS USING DESTRUCTURING

    // import React from 'react'

    // const Day3_Props_2 = ({object_value}) => {
    // return (
    //     <>
    //         <h1>User Name : {object_value.name}</h1>
    //         <h1>User Age : {object_value.age}</h1>
    //         <h1>User Place : {object_value.place}</h1>
    //     </>
    // )
    // }

    // export default Day3_Props_2

// JSON (PROPS)

    // import React from 'react'

    // const Day3_Props_2 = (props) => {
    //   return (
    //     <>
    //         <h1>User 1</h1>
    //         <h3>Name : {props.json_value[0].name}</h3>
    //         <h3>Age : {props.json_value[0].age}</h3>
    //         <h3>Place : {props.json_value[0].place}</h3>

    //         <h1>User 2</h1>
    //         <h3>Name : {props.json_value[1].name}</h3>
    //         <h3>Age : {props.json_value[1].age}</h3>
    //         <h3>Place : {props.json_value[1].place}</h3>

    //         <h1>User 3</h1>
    //         <h3>Name : {props.json_value[2].name}</h3>
    //         <h3>Age : {props.json_value[2].age}</h3>
    //         <h3>Place : {props.json_value[2].place}</h3>
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// JSON PROPS USING DESTRUCTURING

    //  import React from 'react'

    // const Day3_Props_2 = ({json_value}) => {
    //   return (
    //     <>
    //         <h1>Student 1</h1>
    //         <h4>Name : {json_value[0].name}</h4>
    //         <h4>Age : {json_value[0].age}</h4>
    //         <h4>Place : {json_value[0].place}</h4>

    //         <h1>Student 2</h1>
    //         <h4>Name : {json_value[1].name}</h4>
    //         <h4>Age : {json_value[1].age}</h4>
    //         <h4>Place : {json_value[1].place}</h4>

    //         <h1>Student 3</h1>
    //         <h4>Name : {json_value[2].name}</h4>
    //         <h4>Age : {json_value[2].age}</h4>
    //         <h4>Place : {json_value[2].place}</h4>
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// JSON MAP PROPS

    // import React from 'react'

    // const Day3_Props_2 = (props) => {
    //   return (
    //     <>
    //       {props.json_value.map((value , index) => {
    //         return(
    //             <>
    //                 <h4>Name : {value.name}</h4>
    //                 <h4>Age : {value.age}</h4>
    //                 <h4>Place : {value.place}</h4>
    //             </>
    //         )
    //       })}  
    //     </>
    //   )
    // }

    // export default Day3_Props_2

// JSON MAP PROPS USING DESTRUCTURING

// import React from 'react'

// const Day3_Props_2 = ({json_value}) => {
//   return (
//     <>
//         <h1>Total Students : {json_value.length}</h1>
//         {json_value.map((value , index) => {
//             return(
//                 <>
//                     <h4>Name : {value.name}</h4>
//                     <h4>Age : {value.age}</h4>
//                     <h4>Place : {value.place}</h4>
//                 </>
//             )
//         })}  
//     </>
//   )
// }

// export default Day3_Props_2