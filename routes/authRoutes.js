import express from 'express'
import { loginController, registerController, getProfileController } from '../controller/authController.js';
import { requireSignIn } from '../middleweres/authMiddlewere.js';
import multer from 'multer'
const router = express.Router()

router.post('/register', multer().single('profile'), registerController)

router.post('/login', loginController)

router.get('/profile/:id', getProfileController)


export default router;