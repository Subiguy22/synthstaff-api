const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// ✅ Health Check
app.get('/api/v1/ping', (req, res) => {
  res.status(200).json({ message: '✅ Synthstaff API is live!' });
});

// ✅ POST: Submit staffing request
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;

  console.log('Received staffing request:', requestData);

  res.status(201).json({
    message: '✅ Staffing request received successfully!',
    data: requestData,
  });
});

// ✅ GET: Info endpoint for staffing request (optional)
app.get('/api/v1/staffing-request', (req, res) => {
  res.status(200).json({
    message: '📮 Please use POST method to submit a staffing request.',
  });
});

// ✅ GET: Matched candidates
app.get('/api/v1/matched-candidates', (req, res) => {
  const requestId = req.query.request_id;

  if (!requestId) {
    return res.status(400).json({ error: 'Missing request_id parameter' });
  }

  const candidates = [
    {
      candidate_id: 'cand_123',
      name: 'Jane Doe',
      skills: ['Python', 'Machine Learning', 'AWS'],
      experience_years: 5,
      availability: 'Immediate',
      rating: 4.7,
    },
    {
      candidate_id: 'cand_456',
      name: 'John Smith',
      skills: ['JavaScript', 'React', 'Node.js'],
      experience_years: 3,
      availability: '2 weeks',
      rating: 4.3,
    },
  ];

  res.status(200).json({ request_id: requestId, candidates });
});

// ✅ GET: Analytics insights
app.get('/api/v1/analytics/insights', (req, res) => {
  const { timeframe } = req.query;

  const data = {
    top_roles: ['Software Engineer', 'Data Analyst', 'Product Manager'],
    avg_hiring_time_days: 3.4,
    satisfaction_score: 92.5,
    suggestions: [
      'Increase remote job postings',
      'Target junior talent for faster hiring',
    ],
    timeframe: timeframe || '30d',
  };

  res.status(200).json(data);
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

