import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  shortName: {
    type: String,
    required: true,
    unique: true
  },
  primaryColor: {
    type: String,
    required: true
  },
  secondaryColor: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
});

export default mongoose.model('Team', teamSchema);