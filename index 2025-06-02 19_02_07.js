const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files (like logo.png, ai-plugin.json, openapi.yaml) from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root endpoint (for browser sanity check)
app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live and running!');
});

// POST: Submit a staffing request
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;

  // Optional: Validate requestData here

  res.status(201).json({
    message: 'Staffing request received',
    data: requestData,
  });
});

// GET: Endpoint guidance if user tries GET on POST-only route
app.get('/api/v1/staffing-request', (req, res) => {
  res.status(200).json({
    message: '✅ This endpoint is for submitting staffing requests via POST. Please send a POST request instead.',
  });
});

// Optional future route: Matched candidates (stubbed for now)
app.get('/api/v1/matched-candidates', (req, res) => {
  const { request_id } = req.query;

  if (!request_id) {
    return res.status(400).json({ error: 'Missing request_id parameter' });
  }

  res.status(200).json({
    request_id,
    matched_candidates: [
      {
        name: 'Jane Doe',
        skills: ['Python', 'Machine Learning', 'AWS'],
        available: true,
      },
      {
        name: 'John Smith',
        skills: ['Python', 'Deep Learning'],
        available: false,
      }
    ],
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});