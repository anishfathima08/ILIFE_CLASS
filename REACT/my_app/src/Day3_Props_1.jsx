// STYLE, PROPS

// STYLE ( INLINE CSS, CSS USING OBJECT, EXTERNAL FILE )

// INLINE CSS 

    // import React from 'react'

    // const Day3_Props_1 = () => {
    //   return (
    //     <>
    //       <h1 style={{'color':'red', 'background-color' : 'black'}}>Hello</h1>
    //       <h1 style={{color:'red', backgroundColor : 'black'}}>Hello</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props_1

// CSS USING OBJECT

    // import React from 'react'

    // const Day3_Props_1 = () => {

    //   var obj1 = {
    //     color : 'red',
    //     backgroundColor : 'black'
    //   }

    //   var obj2 = {
    //     'color' : 'red',
    //     'background-color' : 'black'
    //   }

    //   return (
    //     <>
    //       <h1 style={obj1}>Hello</h1>
    //       <h1 style={obj2}>Hello</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props_1

// EXTERNAL CSS

    // import React from 'react'
    // import './index.css'

    // const Day3_Props_1 = () => {
    //   return (
    //     <>
    //       <h1>Hello</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props_1

// PROPS ( 
// VARIABLES, VARIABLES PROPS USING DESTURCTURE
// DIRECT PROPS, DIRECT PROPS USING DESTURCTURE
// ARRAY PROPS, ARRAY PROPS USING DESTRUCTURING, ARRAY MAP, ARRAY MAP USING DESTRUCTURING
// OBJECT PROPS, OBJECT PROPS USING DESTRUCTURING, JSON PROPS, JSON PROPS USING DESTRUCTING, JSON MAP, JSON MAP USING DESTRUCTURING
//  )

// VARIABLES (PROPS)

    import React from 'react'
    import Day3_Props_2 from './Day3_Props_2.jsx'

    const Day3_Props_1 = () => {

        var name = "Abi"
        var age = 21
        var place = "Trichy"

        return (
            <>
                <Day3_Props_2 user_name={name} user_age={age} user_place={place}/>
                {/* user_name => props name
                {name} => variable name */}
            </>
        )
    }

    export default Day3_Props_1

// DIRECT (PROPS)

    // import React from 'react'
    // import Day3_Props_2 from './Day3_Props_2'

    // const Day3_Props_1 = () => {
    // return (
    //     <>
    //         <Day3_Props_2 name="Abi" age='8' />  
    //     </>
    // )
    // }

    // export default Day3_Props_1

// ARARY (PROPS)

    // import React from 'react'
    // import Day3_props_2 from './Day3_Props_2.jsx'
    
    // const Day3_Props_1 = () => {
    //     var arr = ['html', 'css', 'bootstrap', 'javascript']
    //     return (
    //         <>
    //             <Day3_props_2 course_arr={arr}/>
    //         </>
    //     )
    // }
    
    // export default Day3_Props_1

// ARRAY MAP (PROPS)

    // import React from 'react'
    // import Day3_Props_2 from './Day3_Props_2'

    // const Day3_Props_1 = () => {

    //     var arr = ["HTML" , "CSS" , "BOOTSTRAP" , "JAVA SCRIPT" , "REACT"]

    //   return (
    //     <>
    //         <Day3_Props_2 array_value={arr} />
    //     </>
    //   )
    // }

    // export default Day3_Props_1

// OBJECT (PROPS)

    // import React from 'react'
    // import Day3_Props_2 from './Day3_Props_2'

    // const Day3_Props_1 = () => {

    //     var obj = {
    //         name : "Abi",
    //         age : 21, 
    //         place : "Trichy"
    //     }

    // return (
    //     <>
    //         <Day3_Props_2 object_value={obj} />
    //     </>
    // )
    // }

    // export default Day3_Props_1

// JSON (PROPS)

// import React from 'react'
// import Day3_Props_2 from './Day3_Props_2'

// const Day3_Props_1 = () => {

//     var data = [
//         {
//             name : "Abi",
//             age : "21", 
//             place : "Trichy"
//         }, 
//         {
//             name : "Banu",
//             age : "22", 
//             place : "Chennai"
//         }, 
//         {
//             name : "Begum",
//             age : "20", 
//             place : "Madurai"
//         }
//     ]

//   return (
//     <>
//         <Day3_Props_2 json_value={data} />
//     </>
//   )
// }

// export default Day3_Props_1