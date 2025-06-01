const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON
app.use(bodyParser.json());

// POST /api/v1/staffing-request
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;

  // In a real app, you'd validate and store this
  res.status(201).json({
    message: 'Staffing request received',
    data: requestData,
  });
});

// Optional health check route
app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live and running!');
});

// Optional GET route for debugging
app.get('/api/v1/staffing-request', (req, res) => {
  res.status(200).json({
    message: 'Use POST to submit a staffing request.',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
