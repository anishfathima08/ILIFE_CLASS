// OPERATOR

// ARITHMETIC OPERATOR - [ +, -, *, **, /, % ]

// var a = 10;
// var b = 2 ;
// console.log(a+b) // 10 + 2 = 12 
// console.log(`${a} + ${b} = ${a+b}`)

// console.log(a-b)
// console.log(a*b)
// console.log(a**b)
// console.log(a/b)
// console.log(a%b)

// ASSIGNMENT OPERATOR - [ +=, -=, *=, /= ]

// var a = 10;
// var b = 2 ;

// console.log(a) // 10
// console.log(a+=b) // a = a + b
// console.log(a) // 12

// console.log(b+=a) // b = b + a 
// console.log(b)
// console.log(a)

// console.log(a-=b) // a = a - b
// console.log(a);
// console.log(b-=a) // b = b - a
// console.log(b)
// console.log(a)

// console.log(a*=b) // a = a * b
// console.log(a) // a = a * b

// console.log(b*=a) // b = b * a ( 2 * 10 = 20 ) b = 20
// console.log(b*=a) // b = b * a ( 20 * 10 = 200 ) b = 200
// console.log(b) // 200

// var a = 10;
// var b = 2 ;

// console.log(a+=b) // a = a + b [ 10 + 2 = 12 ], a = 12
// console.log(a-=b) // a = a - b [ 12 - 2 = 10 ], a = 10
// console.log(a*=b) // a = a * b [ 10 * 2 = 20 ], a = 20
// console.log(a/=b) // a = a / b [ 20 / 2 = 10 ], a = 10
// console.log(a) // 10

// COMPARISON OPERATOR - [ ==, !=, ===, !== ]

// var a = 10;
// var b = 10;

// console.log(a==b) // 10 == 8 // false 
// console.log(a==b) // 10 == 10 // true 

// var a = '10';
// var b = 10;

// console.log(a==b) 

// var a = '10';
// var b = 6;

// console.log(a==b)

// var a = 10;
// var b = 10;

// console.log(a!=b) // true

// var a = '5';
// var b = 6;

// console.log(a!=b)

// var a = '10';
// var b = '8';

// console.log(a===b)

// var a = 10; // value = 10, dt = number
// var b = '10'; // value = 10, dt = string

// console.log(a!==b) 

// var a = 10;
// var b = '10';
// console.log(a!=b) // 10 != 2 => true
// console.log(a!=b) // 10 != 10 => false
// console.log(a!==b) 

// RELATIONAL OPERATOR - <, >, <=, >= 

// var a = 6;
// var b = 6;

// console.log(a<b) // 10<4 .
// console.log(b<a) // 4 < 10

// console.log(a>b) // 10 > 4 true
// console.log(b>a) // 4 > 10 false

// console.log(a<b) // false
// console.log(a>b) // false

// console.log(a<=b) // 10 < or = 10
// console.log(a>=b) // 10 > or = 6

// LOGICAL OPERATOR &&, ||, ! 

// && - AND 

// console.log(true&&true) // true
// console.log(true&&false) // false
// console.log(false&&true) // false
// console.log(false&&false) // false

// console.log(5<4 && 7>3) // false && true => false
// console.log(6>5 && 7!==7) // true && false => false
// console.log(6===5 && 7!==7) // false && false => false
// console.log(5=='5' && 10>5) // true && true => true

// || - OR 

// console.log(true||true) // true
// console.log(true||false) // true
// console.log(false||true) // true
// console.log(false||false) // false

// console.log(4<7 || 8==='9') // true || false => true
// console.log(9==='9' || 8>=8) // false || true => true
// console.log( 8!=5 || 5>=3 ) // true || true  => true
// console.log( '8'!=='8' || 5<=3 ) // false || false  => false

// ! NOT 

// console.log(!true) // false
// console.log(!false) // true

// console.log(!(8>5))

// console.log(!(6==5))

// UNARY OPERATOR 

// POST INCREMENT ++

// var a = 10;
// console.log(a++) // a = a + 1 
// console.log(a) // 11

// var a = 10;
// console.log(++a); 

// var a = 8;
// console.log(a++) // 8 ( 9 )
// console.log(a++) // 9 ( 10 )
// console.log(++a) // 11
// console.log(++a) // 12
// console.log(a) // 12

// var a = 9;
// console.log(++a) // 10
// console.log(a++) // 10 ( 11 )
// console.log(++a) // 12 
// console.log(a++) // 12 ( 13 )
// console.log(++a) // 14
// console.log(a) // 14

// var a = 7;
// console.log(--a) // 6
// console.log(a--) // 6 ( 5 )
// console.log(--a) // 4
// console.log(a--) // 4 ( 3 )
// console.log(a)  // 3

// TERNARY OPERATOR 

// [ (condition) ? true : false ]

// var a = 10;
// var b = 6;

// console.log( (a < b) ? true : false )
// console.log( (a < b) ? false : true )

// var age = 18;

// console.log( ( age >= 18 ) ? 'Eligible to Vote' : 'Not Eligible to Vote' )

// 18 >= 18