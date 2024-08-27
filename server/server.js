const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/data', (req, res) => {
  const data = {
    sensorData: Array.from({ length: 10 }, () => Math.random() * 100),
    motionData: Array.from({ length: 10 }, () => Math.random() * 10),
    latencyData: Array.from({ length: 10 }, () => Math.random() * 200),
    batteryData: Array.from({ length: 10 }, () => Math.random() * 100),
  };
  res.json(data);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

