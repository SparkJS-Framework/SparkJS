import express from 'express';
const router = express.Router();

// web routes here

import { index } from '../app/controllers/indexController.js';
import { helpIndex } from '../app/controllers/helpController.js';


router.get('/', index);

router.get('/help', helpIndex);

export default router;