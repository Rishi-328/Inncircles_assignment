import express from 'express';
import upload from '../middleware/cloudinaryUpload';
import { createHelper, getCount } from '../controllers/helper.controller';
import { getHelpers } from '../controllers/helper.controller';

const router = express.Router();

router.post(
  '/add',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'kycDocument', maxCount: 1 },
    { name: 'additionalDocuments', maxCount: 1 },
  ]),
  createHelper
);

router.get('/getAll',getHelpers);
router.get('/getCount',getCount);

export default router;
