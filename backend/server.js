// server.js
import express from 'express';
import connectDB from './database/db.js'; // Import DB connection function
//import insertCars from './utils/insertCars.js'; // Import insertCars function
import cors from 'cors'
import carRoutes from './routes/carRoutes.js'
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Express app
const app = express();

// Connect to MongoDB
connectDB();

// Insert car data into MongoDB
//insertCars();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://carfinder-frontend.vercel.app"], // Local and deployed frontend URLs
    credentials: true,
  })
);

app.use(express.json());
app.use('/', carRoutes);


// Set the port for your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
