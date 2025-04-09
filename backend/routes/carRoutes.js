import express from 'express';
import { getAllCars, insertNew } from '../controllers/carController.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.get('/', getAllCars);
router.get('/cars', getAllCars);
router.post('/new', upload.single('image'), insertNew); // Accepts form-data with image

export default router;
