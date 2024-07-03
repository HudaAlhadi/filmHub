// app.js (main entry point)

const express = require('express');
const app = express();

// Include routes from different files
const routes1 = require('./routes/routes1');
const routes2 = require('./routes/routes2');

app.use('/api1', routes1);
app.use('/api2', routes2);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
