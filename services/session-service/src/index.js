import express from 'express';
import mongoose from 'mongoose';
import sessionRoutes from './routes/sessionRoutes.js';

const app = express();
app.use(express.json());
app.use('/', sessionRoutes);

mongoose.connect('mongodb+srv://manishcodes117:KhTNLpyVBVrnN3MC@cluster0.jhzbrfg.mongodb.net/?retryWrites=true&w=majority&appName=session')
  .then(() => app.listen(3002, () => console.log('Session service on 3002')))
  .catch(err => console.error('MongoDB connection failed:', err));
