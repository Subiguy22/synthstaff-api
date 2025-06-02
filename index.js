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

app.get('/api/v1/staffing-request', (req, res) => {
  res.status(200).json({
    message: '✅ This endpoint is for submitting staffing requests via POST. Please send a POST request instead.',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
