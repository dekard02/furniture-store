const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const logger = require('')

dotenv.config({ path: './.env' });
const app = express();
app.use('/public', express.static('./public'));

mongoose.set('strictQuery', true);
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
  console.log('Connect DB successfully!!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on ', PORT);
});
