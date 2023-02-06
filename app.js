const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const categoryRouter = require('./routes/categoryRoutes');

dotenv.config({ path: './.env' });
const app = express();
app.use('/public', express.static('./public'));

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

app.use('/api/v1/categories', categoryRouter);

mongoose.set('strictQuery', true);
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
  console.log('Connect DB successfully!!');

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log('Server is running on ', PORT);
  });
});
