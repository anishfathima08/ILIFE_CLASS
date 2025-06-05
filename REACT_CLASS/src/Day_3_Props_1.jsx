// import React from 'react'
// import Day_3_Props_2 from './Day_3_Props_2'

// const Day_3_Props_1 = () => {

//     var text1 = 'Hello'
//     var text2 = 'World'

//     return (
//         <>
//             <Day_3_Props_2  data1={text1} data2={text2}/>
//         </>
//     )
// }

// export default Day_3_Props_1 


// import React from 'react'
// import Day_3_Props_2 from './Day_3_Props_2'

// const Day_3_Props_1 = () => {

//     var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]

//     return (
//         <>  
//             <Day_3_Props_2 array_data={arr} />
//         </>
//     )
// }

// export default Day_3_Props_1


// import React from 'react'
// import Day_3_Props_2 from './Day_3_Props_2'

// const Day_3_Props_1 = () => {

//     var obj = {
//         name : 'abinaya',
//         age : 20,
//         place : 'trichy'
//     }

//     return (
//         <>
//             <Day_3_Props_2 obj_data={obj} />
//         </>
//     )
// }

// export default Day_3_Props_1

// import React from 'react'

// const Day_3_Props_1 = (props) => {

//     return (
//         <>
//             <h1>{props.json_data[0].name}</h1>
//             <h1>{props.json_data[0].age}</h1>
//             <h1>{props.json_data[0].place}</h1>
//             <h1>{props.json_data[1].name}</h1>
//             <h1>{props.json_data[1].age}</h1>
//             <h1>{props.json_data[1].place}</h1>
//         </>
//     )
// }

// export default Day_3_Props_1


// import React from 'react'

// const Day_3_Props_1 = ({json_data}) => {

//     return (
//         <>
//             <h1>{json_data[0].name}</h1>
//             <h1>{json_data[0].age}</h1>
//             <h1>{json_data[0].place}</h1>
//             <h1>{json_data[1].name}</h1>
//             <h1>{json_data[1].age}</h1>
//             <h1>{json_data[1].place}</h1>
//         </>
//     )
// }

// export default Day_3_Props_1

// import React from 'react'

// const Day_3_Props_1 = ({json_data}) => {

//     return (
//         <>
//             {json_data.map((value, index) => {
//                 return(
//                     <div>
//                         <h1>{value.name}</h1>
//                         <h1>{value.age}</h1>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

// export default Day_3_Props_1