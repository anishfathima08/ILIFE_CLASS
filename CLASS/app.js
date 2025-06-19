// FIND 

// var a = [ 8, 1, 2, 3, 4, 5, 7 ]
// console.log(a.some((value) => value % 2 == 0 ))
// console.log(a.find((value) => value % 2 == 0 )) 

// var a = [ 'css', 'html', 'bootstrap' ]
// console.log(a.find((value) => value.length >= 3 ))

// var json = [
//     {
//         name : 'abi',
//         age : 15
//     },
//     {
//         name  : 'anu',
//         age : 20
//     },
//     {
//         name : 'siva',
//         age : 25
//     }
// ]

// console.log(json.find((value) => value.age >= 18 ))

// FILTER 

// var a = [ 1, 2, 3, 4, 6, 7 ] 
// console.log(a.filter((b) => b % 2 !== 0 ))


// var a = [ 'css', 'html', 'bootstrap' ]
// console.log(a.filter((value) => value.length > 3 ))

// var json = [
//     {
//         name : 'abi',
//         age : 15
//     },
//     {
//         name  : 'anu',
//         age : 20
//     },
//     {
//         name : 'siva',
//         age : 25
//     }
// ]

// console.log(json.filter((value) => value.age >= 18 )) 


// var userList = [
//     {
//         img : 'img1.jpg',
//         name : 'Abinaya',
//         age : '20',
//         place : 'Trichy'
//     },
//     {
//         img : 'img1.jpg',
//         name : 'Siva',
//         age : '20',
//         place : 'Chennai'
//     },
//     {
//         img : 'img1.jpg',
//         name : 'Hari',
//         age : '22',
//         place : 'Tanjore'
//     },
//     {
//         img : 'img1.jpg',
//         name : 'Anu',
//         age : '16',
//         place : 'Madurai'
//     }
// ]

// const cardFun = (data) => {
//     var list = ''
//     data.map((value) => {
//         list += `
//             <div class="col-lg-3">
//                 <div class="card">
//                     <img src="${value.img}" alt="">
//                     <div class="card-body">
//                         <h3>${value.name}</h3>
//                         <h4>${value.age}</h4>
//                         <h5>${value.place}</h5>
//                     </div>
//                 </div>
//             </div>
//         `
//     })

//     document.getElementById('userRow').innerHTML = list || `<p class='text-center text-danger'>No Results Found</p>`

// }

// cardFun(userList)

// const submitFun = (event) => {
//     event.preventDefault();

//     var a = document.getElementById('searchBox').value.toUpperCase();

//     var b = userList.filter((c) => c.name.toUpperCase().includes(a) || c.place.toUpperCase().includes(a))

//     cardFun(b)

// }