import express from 'express';
const router = express.Router();

// web routes here

import { index, create } from '../app/controllers/indexController.js';

router.get('/', index);

router.post('/createOrder', create);

export default router;