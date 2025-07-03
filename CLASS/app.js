// STRING 

// var a = "hello"
// console.log(a)
// console.log(typeof(a))

// var a = '45';
// console.log(a)
// console.log(typeof(a))

// var a = 'hello123'
// console.log(a)
// console.log(typeof(a))

// var a = hello;
// console.log(a) // error not defined

// NUMBER

// var a = 10;
// console.log(a)
// console.log(typeof(a)) // Number

// BOOLEAN - TRUE FALSE 

// var a = true;
// console.log(a)
// console.log(typeof(a))

// var a = false;
// console.log(a)
// console.log(typeof(a)) 

// NULL 

// var a = null;
// console.log(a)
// console.log(typeof(a))

// UNDEFINED

// console.log(a) // not defined  - ERROR

// var a;
// console.log(a) // undefined - DATA TYPE

// OBJECT 

// SYNTAX

// variable_type object_name = {
//     key : value,
//     key : value,
//     key : value 
// } 

// var obj = {
//     name : 'hari',
//     age : 20,
//     place : 'trichy',
//     place2 : 'trichy'
// }

// console.log(obj)
// console.log(typeof(obj));

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.place)
// console.log(typeof(obj)) 

// ARRAY 

// SYNTAX

// variable_type array_name = [ value, value, value, value ]

// var arr = [ 'hello', 20, 'trichy', 20 ]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[4])

// var arr = [ 'name', 'is', 'my', 'abc' ]
// console.log(arr)
// console.log(arr[2])
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[3])

// console.log(arr[2],arr[0],arr[1],arr[3])
// console.log(arr[2]+" "+arr[0]+' '+arr[1]+' '+arr[3])

// FUNCTION 

// function function_name(){

// }
// function_name()

// function fun(){
//     alert('Hello')
// }
// fun()

// DATE 

// Sun - 0
// Mon - 1
// Tue - 2
// Wed - 3

// JAN - 0
// FEB - 1
// MAR - 2
// APR - 3
// MAY - 4
// JUNE - 5
// JULY - 6

// var todayDate = new Date()
// console.log(todayDate)
// console.log(todayDate.getDate())
// console.log(todayDate.getDay())
// console.log(todayDate.getMonth())
// console.log(todayDate.toLocaleTimeString())


// STRING METHODS 

// var a = 'hello'
// console.log(a);
// console.log(typeof(a));

// LENGTH - starts with 1

// var a = 'hello'
// console.log(a.length) // 5

// POSITION or INDEX - starts with 0

// var a = 'hello'
// console.log(a[0]) // h
// console.log(a[4]) // o
// console.log(a[1]) // e

// indexOf 

// var a = 'hello'
// console.log(a.indexOf('l')) // 2
// console.log(a.indexOf('o')) // 4

// charAt 

// var a = 'hello'
// console.log(a.charAt(2)) // l
// console.log(a.charAt(3)) // l
// console.log(a.charAt(4)) // o
// console.log(a.charAt(5)) // empty 

// LOWERCASE 

// var a = 'HELLO'
// console.log(a)
// console.log(a.toLowerCase())

// UPPERCASE 

// var a = 'hello'
// console.log(a)
// console.log(a.toUpperCase())

// SUBSTR 

// subtr(start(index), count(length))

// var a = 'helloworld'
// console.log(a)
// console.log(a.substr(5, 5))  // world
// console.log(a.substr(0, 5)) // hello

// var a = 'hello world'
// console.log(a)
// console.log(a.substr(5, 6))

// var a = 'computer science'
// console.log(a.substr(9, 7)) // science
// console.log(a.substr(0, 8)) // computer

// INCLUDES 

// var a = 'hello'
// console.log(a.includes('a')) // false
// console.log(a.includes('e')) // true

// TRIM 

// var a = '      Hello      '
// console.log(a)
// console.log(a.trim())

// var a = '         Hello             World         '
// console.log(a)
// console.log(a.trim())

// REPLACE 

// replace(currentData, replaceData)

// var a = 'hello world'
// console.log(a)
// console.log(a.replace('world', 'javascript'))

// NUMBER METHODS 

// var a = 10;
// console.log(a)
// console.log(typeof(a))

// toFixed

// var a = 10.345;
// console.log(a)
// console.log(a.toFixed()) // 10

// var a = 10.768;
// console.log(a)
// console.log(a.toFixed()) // 11

// var a = 10.555;
// console.log(a)
// console.log(a.toFixed()) // 11

// toString 

// var a = 2;
// console.log(a) // 2
// console.log(typeof(a)) // number

// var b = a.toString()
// console.log(typeof(b)) // string

// Number()

// var a = '2'
// console.log(a)
// console.log(typeof(a)) // string

// var b = Number(a)
// console.log(typeof(b)) // number

// isNaN() -> is Not a Number

// String -> true, Number -> false

// var a = 2;
// console.log(isNaN(a)) // false 

// var a = '2';
// console.log(isNaN(a)) // false

// var a = 'hello'
// console.log(isNaN(a)) // true

// var a = 'hello123'
// console.log(isNaN(a)) // true

// isFinite() 

// String -> false, Number -> true 

// var a = 'hello'
// console.log(isFinite(a)) // false 

// var a = 'hello123'
// console.log(isFinite(a)) // false

// var a = 245678;
// console.log(isFinite(a)) // true

// var a = '245678'
// console.log(isFinite(a)) // true

// Math.sqrt()

// var a = 81
// console.log(Math.sqrt(a)) // 9

// Math.ceil()

// var a = 10.345;
// console.log(Math.ceil(a)) // 11

// var a = 10.567;
// console.log(Math.ceil(a)) // 11

// var a = 10.0564;
// console.log(Math.ceil(a)) // 11

// Math.floor()

// var a = 10.345;
// console.log(a)
// console.log(Math.floor(a)) // 10

// var a = 10.567;
// console.log(a)
// console.log(Math.floor(a)) // 10

// var a = 10.967;
// console.log(a)
// console.log(Math.floor(a)) // 10

// Math.random()

// var a = Math.random() * 1000 // 0 to 999 ( 1, 11, 111 )
// console.log(a);

// var a = Math.floor(Math.random() * 10); // 0 to 9
// console.log(a)

// function randomNum(){
//     var randomNumber = Math.floor(Math.random() * 10000) // 0 to 9999 [ 1, 11, 111, 1111 ]
//     document.getElementById('number').innerHTML = `Your Random Number is ${randomNumber}`
// }

// Your Random Number is 4 