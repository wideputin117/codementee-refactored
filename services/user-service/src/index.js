import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import { startUserSessionConsumer } from './consumer/userconsumer.js';

const app = express();
app.use(express.json());
app.use('/', userRoutes);

mongoose.connect('mongodb+srv://manishcodes117:KhTNLpyVBVrnN3MC@cluster0.jhzbrfg.mongodb.net/?retryWrites=true&w=majority&appName=users')
  .then(() => {
    app.listen(3001, () => console.log('User service on 3001'))
    startUserSessionConsumer()
  })
  .catch(err => console.error('MongoDB connection failed:', err));
