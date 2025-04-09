import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'car-images',
    allowed_formats: ['jpg', 'png', 'webp'],
    transformation: [{ width: 500, height: 300, crop: 'limit' }],
  },
});

const upload = multer({ storage });

export default upload;
