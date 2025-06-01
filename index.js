const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;
  res.status(201).json({
    message: 'Staffing request received',
    data: requestData,
  });
});

app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live and running!');
});

app.get('/api/v1/staffing-request', (req, res) => {
  res.status(200).json({
    message: 'Use POST to submit a staffing request.',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
