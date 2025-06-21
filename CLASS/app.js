// var data = []

// const fetchData = async () => {
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     data = await url.json();
//     displayCard(data)
// }
// fetchData()

// const displayCard = (cardData) => {
//     var cardList = ''
//     cardData.map((value) => {
//         cardList += 
//         `
//             <div class='col-4'>
//                 <div class='card my-3'>
//                     <div class='card-body'>
//                         <h3>${value.name}</h3>
//                         <h6>${value.email}</h6>
//                     </div>
//                 </div>
//             </div>
//         `
//     }) 
    
//     document.getElementById('cardRow').innerHTML = cardList || `<p>No Results Found</p>`
    
// }

// const submitFun = (event) => {
//     event.preventDefault() 
//     var userSearch = document.getElementById('searchBox').value.toLowerCase() 
//     var filterSearch = data.filter((value) => value.name.toLowerCase().includes(userSearch)  )    
//     displayCard(filterSearch)
// }

// OBJECT METHODS

// var obj = {
//     name : 'abinaya',
//     age : 20
// }

// console.log(obj);

// var obj = {
//     name : 'abinaya',
//     age : 20,
//     place : {
//         doorno : '123',
//         street : 'abc street',
//         city : 'trichy'
//     }
// }

// console.log(obj)
// console.log(obj.age)
// console.log(obj.place)
// console.log(obj.place.street)


// var obj =   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }
// }

// console.log(obj.address.geo.lng)

// var obj = {
//     name : 'abinaya',
//     fun : function(){
//         console.log('Hello')
//     }
// }

// obj.fun()

// var obj = {
//     name : 'abinaya',
//     fun : function(){
//         return 'Hello'
//     }
// }

// console.log(obj.fun())

// var obj = {
//     name : 'abinaya',
//     fun : function(){
//         console.log(`Hello ${obj.name}`)
//     }
// }

// obj.fun() 

// var obj = {
//     name : 'abinaya',
//     fun : function(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// obj.fun()

// var obj = {
//     name : 'abinaya',
//     fun : function(){
//         return `Hello ${this.name}`
//     }
// }

// console.log(obj.fun())

// var obj = {
//     key : value,
//     key : value
// }


// var obj = new Map()
// obj.set('name' ,'abi')
// console.log(obj)
// console.log(obj.get('name'))

// var obj = new Map()
// obj.set('name', 'anu')
// obj.set('age', 20)
// console.log(obj)
// console.log(obj.get('age'))

// var obj = new Map()
// obj.set('details', { name : 'abinaya' })
// console.log(obj)
// console.log(obj.get('details'))
// console.log(obj.get('details').name)

// var obj = new Map()
// obj.set('name', 'anu')
// obj.set('age', 20)
// console.log(obj)
// console.log(obj.delete('age'))
// console.log(obj.delete('place'))
// console.log(obj)

// var obj = new Map()
// obj.set('name', 'anu')
// obj.set('age', 20)
// console.log(obj);
// console.log(obj.clear());
// console.log(obj);

// var obj = new Map()
// obj.set('name', 'anu')
// obj.set('age', 20)
// console.log(obj);
// console.log(obj.has('place')); // false
// console.log(obj.has('name')); // true

// var obj = new Map()
// obj.set('name', 'anu')
// obj.set('age', 20)
// obj.set('place', 'trichy')
// console.log(obj);
// console.log(obj.size);