const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Health check route
app.get('/', (req, res) => {
  res.type('text/plain').send('✅ Synthstaff API is live and running!');
});

// Submit a staffing request
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;

  if (!requestData.role_title || !requestData.skills_required || !requestData.urgency_level) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  res.status(201).json({
    message: 'Staffing request submitted successfully',
    data: requestData,
    request_id: 'req_test123' // Simulated request ID
  });
});

// Retrieve matched candidate profiles
const express = require('express');
const bodyParser = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve plugin files
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));
app.use('/', express.static(path.join(__dirname, 'public')));

// POST: Submit staffing request
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;
  res.status(201).json({
    message: 'Staffing request received',
    data: requestData,
  });
});

// GET: Matched candidates
app.get('/api/v1/matched-candidates', (req, res) => {
  const requestId = req.query.request_id || 'default123';
  res.status(200).json({
    candidates: [
      {
        candidate_id: "cand_001",
        name: "Jane Synth",
        skills: ["Python", "ML", "AWS"],
        experience_years: 5,
        availability: "Immediate",
        rating: 4.8
      }
    ]
  });
});

// GET: API homepage
app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
