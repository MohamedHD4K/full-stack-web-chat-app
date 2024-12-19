import express from 'express';
import { get_user, post_user } from '../controllers/userController.js';

const router = express.Router();

router.get('/', get_user);

router.post('/' , post_user)

export default router;
