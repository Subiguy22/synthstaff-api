const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json());

app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;
  res.status(201).json({
    message: 'Staffing request received',
    data: requestData,
  });
});
app.get('/', (req, res) => {
  res.send('🎉 Synthstaff API is live!');
});
app.get('/api/v1/staffing-request', (req, res) => {
  res.status(200).json({
    message: '✅ This endpoint is for submitting staffing requests via POST. Please send a POST request instead.',
  });
});
// GET: Retrieve matched candidates
app.get('/api/v1/matched-candidates', (req, res) => {
  const { request_id } = req.query;

  if (!request_id) {
    return res.status(400).json({ error: 'Missing request_id in query params.' });
  }

  // Simulated response — in real app you'd fetch from a database
  res.status(200).json({
    candidates: [
      {
        candidate_id: 'cand_001',
        name: 'Jane Doe',
        skills: ['Figma', 'User Research', 'Prototyping'],
        experience_years: 5,
        availability: 'Immediate',
        rating: 4.7
      },
      {
        candidate_id: 'cand_002',
        name: 'John Smith',
        skills: ['Figma', 'UX Strategy', 'Mobile UX'],
        experience_years: 4,
        availability: '2 weeks',
        rating: 4.6
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
