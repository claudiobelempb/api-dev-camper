const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DEV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running in ${DEV} node on port ${PORT}`);
});