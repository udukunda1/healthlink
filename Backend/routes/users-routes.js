import express from 'express';
import { GetMessage } from '../controlers/users-controllers.js';

const router = express.Router();

router.get('/', GetMessage);

export default router;