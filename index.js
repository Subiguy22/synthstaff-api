const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// ✅ Serve static files from the /public folder
app.use(express.static(path.join(__dirname, 'public')));

// 🧪 Health check route
app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live and running!');
});

// 🧠 POST endpoint to receive staffing requests
app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;
  res.status(201).json({
    message: 'Staffing request received',
    data: requestData,
  });
});

// 🧠 GET endpoint placeholder for matched candidates
app.get('/api/v1/matched-candidates', (req, res) => {
  res.status(200).json({
    candidates: [
      { name: "Ada Lovelace", skills: ["Python", "ML"] },
      { name: "Alan Turing", skills: ["AI", "Logic"] }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
