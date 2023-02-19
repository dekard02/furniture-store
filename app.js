const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const AppError = require('./errors/AppError');
const globalErrorHandler = require('./middlewares/error');

const categoryRouter = require('./routes/categoryRoutes');
const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();
app.use('/public', express.static('./public'));

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

app.use('/api/v1/', authRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', orderRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

mongoose.set('strictQuery', true);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('Connect DB successfully!!');

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log('Server is running on ', PORT);
  });
});
