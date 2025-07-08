// CONDITIONAL STATEMENTS 

// IF 

// SYNTAX 

// if(condition){
//     statement 
// }

// if(5>4){
//     console.log('True')
// }

// if(5!=='5' || 4>=4){ 
//     console.log('True')
// }

// IF ELSE 

// if(condition){
//     statement 
// }
// else{
//     statement
// }

// if(6<4){
//     console.log('False')
// }
// else{
//     console.log('True')
// }

// var age = 13 

// if(age >= 18){
//     console.log('Eligible To Vote')
// }
// else{
//     console.log('Not Eligible To Vote')
// }


// var num = 7;

// if(num % 2 == 0){
//     console.log('Even')
// }
// else{
//     console.log('Odd')
// }


// ELSE IF 

// SYNTAX 

// if(condition){
//     statement;
// }
// else if(condition){
//     statement
// }
// else if(condition){
//     statement
// }
// else{
//     statement
// }

// var mark = 60;

// if(mark >= 80){ // 60 >= 80
//     console.log('Grade A')
// }
// else if(mark > 60){ // 60 > 60
//     console.log('Grade B')
// }
// else if(mark >= 40){ // 60 >= 40
//     console.log('Grade C')
// }
// else{
//     console.log('Fail')
// }

// age -> 0 to 5 child, 5 to 15 adult, 15 to 25 teenager, 25 to 35 men, 35 to 45 elder 

// var age = 15;

// if(age <= 5){  // 15 <= 5
//     console.log('Child')
// }
// else if(age >= 5 && age <= 15){ 
//     console.log('Adult')
// }
// else if(age >= 15 && age <= 25 ){
//     console.log('Teenager')
// }
// else if(age >= 25 && age <= 35){ 
//     console.log('Men')
// }
// else{
//     console.log('Elder')
// }

// var count = Number(document.getElementById('count').innerHTML)

// const addFun = () => {
//     if(count < 10){  
//         count = count + 1
//         document.getElementById('count').innerHTML = count
//         document.getElementById('limit').innerHTML = ''
//     }
//     else{
//         document.getElementById('limit').innerHTML = 'You Reached Maximum Limit'
//     }
// }

// const subFun = () => {
//     if(count > 0){  
//         count = count - 1;
//         document.getElementById('count').innerHTML = count
//         document.getElementById('limit').innerHTML = ''
//     }
//     else{
//         document.getElementById('limit').innerHTML = 'You Reached Minimum Limit'
//     }

// }