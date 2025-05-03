import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => {
    console.error("MongoDB connection failed:", err.message);
  });

const app = express();

app.use(express.json()); // Keep only once

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Global error handler
app.use((err, req, res, next) => {
  // Ensure error has statusCode and message
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
      statusCode,
      message
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
