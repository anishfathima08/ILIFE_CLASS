// DAY - 2

// VARIABLES (NUM, STR), ARRAY, ARRAY USING MAP, OBJECT, JSON, JSON USING MAP, FUNCTION INSIDE ANOTHER FUNCTION, FETCHING DATA IN CONSOLE, CLASS COMPONENTES (3)

// VARIABLES

// import React from 'react'

// const Day_2_JS = () => {
//   var a = 'Hello';
//   var b = 'World'
//   return (
//     <>
//       <h1>{a} {b}</h1>
//     </>
//   )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {
//   var a = 10;
//   var b = 20;
//   return (
//     <>  
//       <h1>{a + b}</h1>
//     </>
//   )
// }

// export default Day_2_JS

// ARRAY 

// import React from 'react'

// const Day_2_JS = () => {

//   var arr = ['html', 'css','bootstrap', 'javascript']
//   var name = ['name', 'abi','my', 'is']
//   return (
//     <>
//       <h1>{arr[0]}</h1>
//       <h1>{arr[1]}</h1>
//       <h1>{arr[2]}</h1>
//       <h1>{arr[3]}</h1>

//       <p>{name[2]} {name[0]} {name[3]} {name[1]}</p>
//     </>
//   )
// }

// export default Day_2_JS

// ARRAY IN MAP

// import React from 'react'

// const Day_2_JS = () => {

//   var arr = ['html', 'css','bootstrap', 'javascript']
//   return (
//     <>
//       {arr.map((value, index) => {
//         return(
//           <h1 key={index}>{value}</h1>
//         )
//       })}
//     </>
//   )
// }

// export default Day_2_JS

// OBJECT 

// import React from 'react'

// const Day_2_JS = () => {

  // var obj = {
  //   name : 'abinaya',
  //   age : 20,
  //   place : 'Trichy',
  //   number : 1234567890
  // }

  // var obj = {
  //   name : 'abinaya',
  //   age : 20,
  //   address : {
  //     doorno : 8,
  //     street : '3rd Street',
  //     city : 'Trichy'
  //   },
  //   number : 1234567890
  // }

//   return (
//     <>
//       <h1>{obj.name}</h1>
//       <h1>{obj.age}</h1>
//       <h1>{obj.place}</h1>
//       <h1>{obj.number}</h1>

//       <h1>{obj.address.city}</h1>
//     </>
//   )
// }

// export default Day_2_JS

// JSON

// import React from 'react'

// const Day_2_JS = () => {

  // var json_obj = [
  //   {
  //     name : 'abinaya',
  //     age : 20,
  //     place : 'trichy'
  //   },
  //   {
  //     name : 'anu',
  //     age : 24,
  //     place : 'chennai'
  //   },
  //   {
  //     name : 'sree',
  //     age : 26,
  //     place : 'madurai'
  //   }
  // ]

//   return (
//     <>
//       <h1>{json_obj[0].name}</h1>
//       <h1>{json_obj[1].age}</h1>
//     </>
//   )
// }

// export default Day_2_JS

// JSON IN MAP 

// import React from 'react'

// const Day_2_JS = () => {

//   var json_obj = [
//     {
//       name : 'abinaya',
//       age : 20,
//       place : 'trichy'
//     },
//     {
//       name : 'anu',
//       age : 24,
//       place : 'chennai'
//     },
//     {
//       name : 'sree',
//       age : 26,
//       place : 'madurai'
//     }
//   ]

//   return (
//     <>
//       {json_obj.map((value, index) => {
//         return(
//           <h1 key={index}>{value.name}</h1>
//         )
//       })}
//     </>
//   )
// }

// export default Day_2_JS

// import React from 'react'

// const Day_2_JS = () => {

//   var a = 10;
//   var b = 20;

//   const fun = () => {
//     return(
//       <>
//         <h1>{(a > b ) ? 'true' : 'false'}</h1>
//       </>
//     )
//   }
//   return fun()

// }

// export default Day_2_JS

// Fetching Data using API 

// import React from 'react'

// const Day_2_JS = () => {

//   async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/users');
//     var data = await url.json();
//     data.map((value) => {
//       return(
//         console.log(value.name)
//       )
//     })
//   } 
//   fun()
// }

// export default Day_2_JS

// EVENTS

// ONCLICK

// import React from 'react'

// const Day_2_JS = () => {

//   const clickFun = () => {
//     alert('Click Event')
//   }

//   return (
//     <>
//       <button onClick={clickFun}>Click Here</button>
//     </>
//   )
// }

// export default Day_2_JS

// ON DOUBLE CLICK

// import React from 'react'

// const Day_2_JS = () => {

//   const dblClickFun = () => {
//     alert('Hello')
//   }

//   return (
//     <>
//       <button onDoubleClick={dblClickFun}>Click</button>
//     </>
//   )
// }

// export default Day_2_JS

// ON MOUSE OVER 

// import React from 'react'

// const Day_2_JS = () => {

//   const mouseOverFun = () => {
//     alert('Hello')
//   }

//   return (
//     <>
//       <h1 onMouseOver={mouseOverFun}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est rerum quidem reprehenderit numquam dolorem dicta at voluptatem, quis repudiandae praesentium distinctio tenetur? Esse dolorem consequuntur maiores blanditiis porro laudantium omnis deleniti, nostrum, reiciendis nobis molestiae excepturi! Explicabo reiciendis odio at molestias illo sapiente natus blanditiis officiis, animi veniam ut.</h1>
//       </>
//   )
// }

// export default Day_2_JS

// ON MOUSE OUT 

// import React from 'react'

// const Day_2 = () => {

//   const mouseOutFun = () => {
//     alert('Hello')
//   }

//   return (
//     <>
//       <h1 onMouseOut={mouseOutFun}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores earum ex. Quia rerum libero perferendis cupiditate! Dicta esse dolores consectetur cupiditate totam repellat, aliquid suscipit voluptates ullam nam eius magni labore? Possimus magnam porro sequi sapiente voluptates commodi maiores voluptate. Numquam repellendus minus rerum possimus laborum nihil veritatis facilis!</h1>
//      </>
//   )
// }

// export default Day_2