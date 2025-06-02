const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON in requests
app.use(bodyParser.json());

// Health check route (GET /)
app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live and running!');
});

// POST /api/v1/staffing-request
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;
  res.status(201).json({
    message: 'Staffing request received',
    data: requestData,
  });
});

// GET /api/v1/staffing-request
app.get('/api/v1/staffing-request', (req, res) => {
  res.json({ message: 'Use POST to submit a staffing request.' });
});

// GET /api/v1/matched-candidates
app.get('/api/v1/matched-candidates', (req, res) => {
  const requestId = req.query.request_id;
  res.json({
    request_id: requestId,
    matched: [
      { name: "Ava Synth", skillset: ["Python",