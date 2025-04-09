// database/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
