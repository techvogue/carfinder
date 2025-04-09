import Car from '../models/Car.js';

// Get all cars
export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json({"cars": cars});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
};


export const insertNew = async (req, res) => {
  try {
    const {
      name,
      brand,
      price,
      fuelType,
      seatingCapacity,
      year,
      mileage,
      transmission,
      description
    } = req.body;

    const imageUrl = req.file?.path || "Image Not Found";

    const newCar = new Car({
      name,
      brand,
      price,
      fuelType,
      seatingCapacity,
      year,
      mileage,
      transmission,
      image: imageUrl,
      description
    });

    await newCar.save();

    res.status(201).json({ message: 'Car added successfully', car: newCar });
  } catch (error) {
    res.status(500).json({ message: 'Error adding car', error: error.message });
  }
};


