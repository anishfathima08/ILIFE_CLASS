const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/user');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

// Serve HTML files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'form.html')));
app.get('/view', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

// Add User
app.post('/addUser', async (req, res) => {
    const { name, email } = req.body;
    await User.create({ name, email });
    res.redirect('/view');
});

// Get All Users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Delete User
app.delete('/deleteUser/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
});

// Update User
app.put('/updateUser/:id', async (req, res) => {
    const { name, email } = req.body;
    await User.findByIdAndUpdate(req.params.id, { name, email });
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
