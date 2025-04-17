import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  menteeId: String,
  mentorId: String,
  time: Date
});

export default mongoose.model('Session', sessionSchema);
