import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI!).then(() => console.log('Connected to MongoDB')).catch((err) => console.error('MongoDB connection error:', err));

// Routes will go here

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})