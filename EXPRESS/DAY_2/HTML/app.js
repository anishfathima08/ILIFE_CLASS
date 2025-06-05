// Importing HTML files in Express

// METHOD - 1 

// const express = require('express');
// const app = express();

// const path = require('path'); 

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(8080, () => {
//   console.log('Server running on http://localhost:8080');
// });

// METHOD - 2

const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});