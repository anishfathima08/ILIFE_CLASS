// PUSH 

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]

// console.log(arr);
// console.log(arr.push('hello'));
// console.log(arr);
// console.log(arr.push(''));
// console.log(arr);

// POP 

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr.push('hello')); //'html', 'css', 'bootstrap', 'javascript', hello
// console.log(arr.push('abc')); // 'html', 'css', 'bootstrap', 'javascript', hello, abc
// console.log(arr.pop()); // 'html', 'css', 'bootstrap', 'javascript', hello,
// console.log(arr.pop()); // 'html', 'css', 'bootstrap', 'javascript'
// console.log(arr.push('abc')); // 'html', 'css', 'bootstrap', 'javascript', abc
// console.log(arr.push('react')); // 'html', 'css', 'bootstrap', 'javascript', abc, react
// // console.log(arr.pop()); 'html', 'css', 'bootstrap', 'javascript', abc,
// console.log(arr); // 'html', 'css', 'bootstrap', 'javascript', abc

// SHIFT 

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// UNSHIFT 

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.unshift('Hello'));
// console.log(arr);

// var a = [ 2, 4, 5, 6 ]
// console.log(a.unshift(8)); // 8, 2, 4, 5, 6
// console.log(a.shift()); // 2, 4, 5, 6
// console.log(a.unshift(6)); // 6, 2, 4, 5, 6
// console.log(a.unshift(8)); // 8, 6, 2, 4, 5, 6
// console.log(a.shift()); // 6, 2, 4, 5, 6
// console.log(a.unshift(2)); // 2, 6, 2, 4, 5, 6
// console.log(a.unshift(5)); // 5, 2, 6, 2, 4, 5, 6
// console.log(a);

// var a = [ 1, 3, 5, 7 ]
// console.log(a.push(8)); // 1, 3, 5, 7, 8
// console.log(a.unshift(9)); // 9, 1, 3, 5, 7, 8
// console.log(a.pop()); // 9, 1, 3, 5, 7
// console.log(a.shift()); // 1, 3, 5, 7
// console.log(a.unshift(0)); // 0, 1, 3, 5, 7
// console.log(a.shift()); // 1, 3, 5, 7
// console.log(a.unshift(3)); // 3, 1, 3, 5, 7
// console.log(a.push(4)); // 3, 1, 3, 5, 7, 4
// console.log(a.push(7)); // 3, 1, 3, 5, 7, 4, 7
// console.log(a.pop()); // 3, 1, 3, 5, 7, 4
// console.log(a);

// JOIN 

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.join()); // html,css,bootstrap,javascript
// console.log(arr.join('')); // htmlcssbootstrapjavascript
// console.log(arr.join('-')); // html-css-
// console.log(arr.join('*')); // html*css*
// console.log(arr.join('     ')); // html           css       bootstrap

// REVERSE 

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.reverse());

// var a = [ 5, 4, 3, 2, 1 ]
// console.log(a);
// console.log(a.reverse());

// SORT

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.sort()); // bootstrap, css, html, javascript

// var a = [ 30, 20, 100 ]
// console.log(a);
// console.log(a.sort()); // 20, 30, 100

// console.log(a.sort((a, b) => a - b));

// +ve => swap, -ve => no swap 

// a = 30, b = 20, 30 - 20 = 10 [ 20, 30, 100 ]
// a = 30, b = 100, 30 - 100 = -70 [ 20, 30, 100 ]

// var a = [ 30, 20, 100 ]
// console.log(a.sort((a, b) => b - a));

// a = 30, b = 20, 20 - 30 = -10 [ 30, 20, 100 ]
// a = 20, b = 100, 100 - 20 = 80 [ 30, 100, 20 ]
// a = 30, b = 100, 100 - 30 = 70 [ 100, 30, 20 ]

// SPLICE ( start (0), deletecount, newitems )


// REMOVE

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// // console.log(arr.splice(0, 2));
// // console.log(arr.splice(2, 1));
// console.log(arr.splice(2));
// console.log(arr); 

// REPLACE

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.splice(2, 1, 'hello'));
// console.log(arr);

// INSERT

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr);
// console.log(arr.splice(1, 0, 1));
// console.log(arr);


// SLICE ( start, deletecount )

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// console.log(arr.splice(0, 2)); // html, css
// console.log(arr); // bootstrap, js

// var arr = [ 'html', 'css', 'bootstrap', 'javascript' ]
// var arr1 = arr.slice(0, 2); // html, css
// console.log(arr1);
// console.log(arr);


// CONCAT 

// var arr1 = [ 1, 2, 3 ]
// var arr2 = [ 4, 5, 6 ]

// console.log(arr1[0]-arr2[0]);

// console.log(arr1);
// console.log(arr2.concat('hello', 'abc')); // 456123
// console.log(arr1);

// var arr = [ 1, 2, 3, [ 'html', 'css','js' ] ]
// console.log(arr[3][2]);

// var a = [ 9, 3, 8, 2, 7 ]
// console.log(a.some((value) => value % 2 == 0 ));

// var a = [ 10, 6, 8, 2, 7 ]
// console.log(a.some((abc) => abc % 2 == 0));

// 10 % 2 == 0 // 

// var arr = [
//     {
//         name : 'abinaya',
//         age : 10
//     },
//     {
//         name : 'siva',
//         age : 2
//     },
//     {
//         name : 'hari',
//         age : 15
//     }
// ]

// console.log(arr.every((value) => value.age <= 18 ));