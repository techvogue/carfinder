// models/carModel.js
import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  fuelType: String,
  seatingCapacity: Number,
  year: Number,
  mileage: Number,
  transmission: String,
  image: String,
  description: String,
});

const Car = mongoose.model('Car', carSchema);

export default Car;
