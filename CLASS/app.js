// FOR LOOP 

// for(initialization; condition; increment/decrement){
//     statement;
// }

// for(var i = 1; i <= 5; i++){
//     console.log(i)
// }

// i = 1, 1 <= 5, 1 ( i++ = i = i + 1)
// i = 2, 2 <= 5, 2
// i = 3, 3 <= 5, 3
// i = 4, 4 <= 5, 4
// i = 5, 5 <= 5, 5
// i = 6, 6 <= 5

// var otp = Math.floor(Math.random() * 1000)  // 0 to 999
// console.log(otp)

// var otp = ''

// for(var i = 1; i <= 6; i++){
//     otp += Math.floor(Math.random() *  10)
// }

// console.log(otp)

// otp = ''
// otp += 5342

// i = 1, 1 <= 4, 7
// i = 2, 2 <= 4, 76
// i = 3, 3 <= 4, 764
// i = 4, 4 <= 4, 7642
// i = 5, 5 <= 4 -> false

var arr = [ 'html', 'css', 'bootstrap', 'javascript', 'abc' ]
console.log(arr.length); // 5

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

for( var i = 0; i <= arr.length-1; i++ ){
    console.log(arr[i])
}

// i = 0, 0 <= 4, arr[0] - html
// i = 1, 1 <= 4, arr[1] - css
// i = 2, 2 <= 4, arr[2] - bootstrap
// i = 3, 3 <= 4, arr[3] - js
// i = 4, 4 <= 4, arr[4] - abc
// i = 5, 5 <= 4, false 

// DECREMENT

for( i = 5; i >= 1; i--){
    console.log(i)
}

// i = 5, 5 >= 1, 5
// i = 4, 4 >= 1, 4
// i = 3, 3 >= 1, 3
// i = 2, 2 >= 1, 2
// i = 1, 1 >= 1, 1
// i = 0, 0 >= 1

var arr = [ 'html', 'css', 'bootstrap', 'javascript', 'abc', 'hello', 'hi' ]

for(var i = arr.length-1; i >= 0; i--){
    console.log(arr[i])
}

// i = 4, 4 >= 0, arr[4] - abc 
// i = 3, 3 >= 0, arr[3] - js
// i = 2, 2 >= 0, arr[2] - bootstrap
// i = 1, 1 >= 0, arr[1] - css
// i = 0, 0 >= 0, arr[0] - html

var a = 'hello' // olleh
var reverse = ''

for(var i = 4; i >= 0; i--){
    reverse += a[i]
}

console.log(reverse)

// i = 4, 4 >= 0, a[4] = o
// i = 3, 3 >= 0, a[3] = ol
// i = 2, 2 >= 0, a[2] = oll
// i = 1, 1 >= 0, a[1] = olle
// i = 0, 0 >= 0, a[0] = olleh