const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('✅ Synthstaff API is live!');
});
