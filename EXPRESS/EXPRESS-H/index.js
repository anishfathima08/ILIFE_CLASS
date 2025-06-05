
// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//   if(req.method=='GET' && req.url== '/'){
//     res.send('HELLO')
//   }
// })

// app.listen(3000,()=>{
//   console.log('http://localhost:3000')
// })




// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
  });

  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  


// const express = require('express')
// const app = express()
// const path = require('path')


// app.use(express.urlencoded({extended : true}))


// app.use(express.static(path.join(__dirname,'public')))

// app.get('/',async(req,res)=>{
//   res.sendFile(path.join(__dirname,'public','index.html'))
// })

// app.post('/submit',async(req,res)=>{
//   const {username,password}=req.body
//   res.send(`Username : ${username} , Password : ${password}`)
// })

// app.listen(3000,()=>{
//   console.log('http://localhost:3000')
// })




// const express = require('express');
// const app = express();
// const path = require('path');
// const multer = require('multer');
// const fs = require('fs');

// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadDir),
//   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
// });
// const upload = multer({ storage: storage });

// app.get('/', async (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.post('/submit', upload.single('profilePic'), async (req, res) => {
//   const { username, password } = req.body;
//   const file = req.file;

//   res.send(`
//     <h2>Form Submitted</h2>
//     <p>Username: ${username}</p>
//     <p>Password: ${password}</p>
//     ${file ? `<p>Uploaded File: ${file.originalname}</p>
//               <img src="/uploads/${file.filename}" style="max-width:200px;">`
//            : '<p>No file uploaded.</p>'}
//     <br><br>
//     <a href="/">Go Back</a>
//   `);
// });

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });