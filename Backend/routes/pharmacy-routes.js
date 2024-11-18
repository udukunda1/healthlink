import express from 'express';
import { addMed, addService, DeleteMed, DeleteService, GetPharmacies, GetPharmacy, LoginPharmacy } from '../controlers/pharmacy-controllers.js';
import checkAuthPharma from '../middleware/check-auth-pharma.js';

const router = express.Router();

router.get('/', GetPharmacies);
router.get('/:pid', GetPharmacy);
router.post('/login', LoginPharmacy);
router.use(checkAuthPharma);

router.post('/medicine', addMed);
router.post('/service', addService);
router.delete('/medicine', DeleteMed);
router.delete('/service', DeleteService);


export default router;