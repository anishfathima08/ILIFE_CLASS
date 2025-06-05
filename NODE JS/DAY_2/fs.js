// FILE SYSTEM ( WRITE & READ )

// WRITING A FILE

// const file = require('fs')

// file.writeFileSync('sample.html', 'Hello')

// file.writeFileSync('sample.html', '<h1>Hello</h1>')

// file.writeFileSync('sample.html', `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Hello</h1>
// </body>
// </html>`)

// READING A FILE

// const file = require('fs')

// file.readFile('sample.html', 'utf8', (err, data) => {
//   if(err){
//     console.error(err);
//   }
//   else{
//     console.log(data);
//   }
// }); 