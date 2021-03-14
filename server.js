const express = require('express');
const dotenv = require('dotenv');

const bootcampRouter = require('./routes/bootcamps.routes.js');

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

app.use('/api/v1/bootcamps', bootcampRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`);
});