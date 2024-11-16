import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No options needed for newer drivers
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;
