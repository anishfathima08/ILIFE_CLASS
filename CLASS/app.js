// function fun(){
//     console.log('Hello')
// }
// fun()

// function fun(){
//     return 'Hello'
// }
// console.log(fun())

// SINGLE PARAMETER CONSOLE

// function fun(a){
//     console.log(a)
// }
// fun(4)

// function fun(text){
//     console.log(text)
// }
// fun('hello')

// SINGLE PARAMETER RETURN

// function fun(a){
//     return a
// }
// console.log(fun(5))

// function fun(text){
//     return text 
// }
// console.log(fun('hello'))

// MULITPLE PARAMETER CONSOLE

// function fun(a, b){
//     console.log( a, b)
// }
// fun(4, 5)

// function fun(text1, text2){
//     console.log(text1, text2)
// }
// fun('hello', 'world')

// DEFAULT PARAMETER 

// function fun(a = 3){
//     console.log(a)
// }
// fun()

// function fun(text = 'hello'){
//     console.log(text)
// }
// fun('hi')

// function fun(a = 5){
//     return a 
// }
// console.log(fun())

// function fun(text = 'hello'){
//     return text 
// }
// console.log(fun())

// function fun(){

// }
// fun()

// ARROW FUNCTION SYNTAX 

// variable_type function_name = () => {
//     statement
// }
// function_name()

// var fun = () => {
//     console.log('Hello')
// }
// fun()

// var fun = () => {
//     return 'Hello'
// }
// console.log(fun())

// var fun = (a) => {
//     console.log(a)
// }
// fun(3)

// var fun = (a) => {
//     return a
// }
// console.log(fun(4))

// var fun = (a, b) => {
//     console.log(a, b)
// }
// fun(3, 4)

// var fun = ( a = 7 ) => {
//     console.log(a)
// }
// fun(8)

// Concise Arrow Function 

// var fun = () => {
//     console.log('Hello')
// }
// fun()

// var fun = () => console.log('Hello')

// fun()

// JSON -> JavaScript Object Notation 

// var arr = [ 'html', 'css', 'abc' ]
// console.log(arr[2]);

// var obj = {
//     name : 'abc',
//     age : 20,
//     place : 'trichy'
// }

// console.log(obj.age);

// JSON SYNTAX 

// variable_type json_name = [
    // {
        // key : value,
//         key : value, 
//         key : value
//     },
//     {
//         key : value,
//         key : value, 
//         key : value
//     },
//     {
//         key : value,
//         key : value, 
//         key : value
//     },
//     {
//         key : value,
//         key : value, 
//         key : value
//     }
// ]


// var json = [
//     {
//         name : 'abc',
//         age : 20,
//         place : 'trichy'
//     },
//     {
//         name : 'xyz',
//         age : 24,
//         place : 'chennai'
//     },
//     {
//         name : 'hello',
//         age : 30,
//         place : 'madurai'
//     }
// ]

// console.log(json)
// console.log(json[0].place)
// console.log(json[2].age);
// console.log(json[1].name);

// async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     var data = await url.json();
//     console.log(data[0]);
// }
// fun()

// async function fun(){
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     var data = await url.json();
//     console.log(data[0].name);
//     console.log(data[1].name);
// }
// fun()

// var fun = async () => {
//     var url = await fetch('https://jsonplaceholder.typicode.com/users')
//     var data = await url.json();
//     console.log(data);
// }
// fun() 

// LOCAL VARIABLE 

// function fun(){
    // var a = 10;
    // console.log(a);
// }

// console.log(a) // not defined

// fun()

var a = 10;

function fun(){
    console.log(a)
}
fun()

console.log(a);