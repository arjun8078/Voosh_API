const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');

const authRouter = require('./router/Auth/auth');
const userRouter = require('./router/User/user');
const adminRouter = require('./router/Admin/admin');
const userTypeRouter = require('./router/UserType/usertype');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: './config/.env' });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS,GET,POST,PUT,PATCH,DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(multer().single('image'));

app.use('',authRouter);
app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/userType',userTypeRouter);

app.use((error, req, res, next) => {
  const data = error.data;
  const message = error.message;
  const status = error.status || 500;
  res.status(status).json({ message: message, data: data });
  next();
});


mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    app.listen(process.env.PORT, (req, res, next) => {
      console.log(`Server is Running At PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
});

