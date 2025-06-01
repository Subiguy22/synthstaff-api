const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/v1/staffing-request', (req, res) => {
  const requestData = req.body;
  res.status(201).json({
    message: "Staffing request received",
    data: requestData
  });
});

// 👇 This is important for deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
