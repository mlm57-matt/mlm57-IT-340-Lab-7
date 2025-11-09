const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
res.send('Hello MEAN Stack!Whats up');
res.json([{ name: 'Item 1' }, { name: 'Item 2' }]);
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase';

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

