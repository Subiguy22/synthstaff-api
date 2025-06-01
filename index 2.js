const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live and running!');
});

// POST /api/v1/staffing-request
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;

  if (!requestData.role_title || !requestData.skills_required || !requestData.urgency_level) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simulate a request ID
  const request_id = `req_${Math.random().toString(36).substring(7)}`;

  res.status(201).json({
    message: 'Staffing request received',
    request_id: request_id,
    data: requestData
  });
});

// GET /api/v1/matched-candidates
app.get('/api/v1/matched-candidates', (req, res) => {
  const { request_id } = req.query;

  if (!request_id) {
    return res.status(400).json({ error: 'Missing request_id' });
  }

  res.status(200).json({
    candidates: [
      {
        candidate_id: 'ai_827391',
        name: 'Ava (Support AI)',
        skills: ['Customer Support', 'De-escalation', 'Empathy'],
        personality_traits: ['Friendly', 'Reliable'],
        voice_style: 'Warm, natural',
        rating: 4.8
      }
    ]
  });
});

// GET /api/v1/analytics/insights
app.get('/api/v1/analytics/insights', (req, res) => {
  const { timeframe = '30d' } = req.query;

  res.status(200).json({
    top_roles: ['AI Sales Assistant', 'Support Bot'],
    avg_hiring_time_days: 2.7,
    satisfaction_score: 91.2,
    suggestions: [
      'Deploy more AI reps for weekend coverage',
      'Increase AI training in conflict resolution'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API is running at http://localhost:${PORT}`);
});
