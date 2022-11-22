import express from 'express';
import { createCar, deleteCar, getAllCar, getCar } from '../controllers/CarController.js';

const router = express.Router();

router.get('/', getAllCar);
router.get('/:id', getCar);
router.post('/', createCar);
router.delete('/:id', deleteCar);


export default router;