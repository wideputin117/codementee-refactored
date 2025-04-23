import mongoose from 'mongoose';

/** this is the schema for the booking of a session with the mentor */
const sessionSchema = new mongoose.Schema({
  menteeDetails: {
    menteeId: {
      type: mongoose.Schema.Types.ObjectId
    },
    menteeName: { type: String, required: true },
    menteeEmail: { type: String, required: true },
    menteePhoneNumber: { type: String, required: true }
  },
  mentorDetails: {
    mentorId: {
      type: mongoose.Schema.Types.ObjectId
    },
    mentorName: { type: String, required: true },
    mentorEmail: { type: String, required: true }
  },
  slotTime: { type: String, required: true },
  status: {
    type: String,
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
    required: true
  }
});

export default mongoose.model('Session', sessionSchema);
