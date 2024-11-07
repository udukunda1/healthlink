import express from 'express';
import { GetPharmacies, GetPharmacy } from '../controlers/pharmacy-controllers.js';

const router = express.Router();

router.get('/', GetPharmacies);
router.get('/:pid', GetPharmacy);


export default router;