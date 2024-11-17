import express from 'express';
import { GetPharmacies, GetPharmacy, LoginPharmacy } from '../controlers/pharmacy-controllers.js';
import checkAuthPharma from '../middleware/check-auth-pharma.js';

const router = express.Router();

router.get('/', GetPharmacies);
router.get('/:pid', GetPharmacy);
router.post('/login', LoginPharmacy);
router.use(checkAuthPharma);


export default router;