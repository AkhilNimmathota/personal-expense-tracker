// app.js
const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());  // Middleware to parse JSON

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use transaction routes
app.use('/api', transactionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
