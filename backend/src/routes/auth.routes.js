import { Router } from 'express'
import { body } from 'express-validator'
import * as authController from '../controllers/auth.controller.js'
import { authenticate } from '../middleware/auth.middleware.js'

const router = Router()

// Validation rules
const registerValidation = [
  body('username')
    .trim()
    .isLength({ min: 4, max: 50 })
    .withMessage('Username must be between 4 and 50 characters'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
    .matches(/\d/)
    .withMessage('Password must contain at least one number'),
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required'),
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required')
]

const loginValidation = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
]

// Routes
router.post('/register', registerValidation, authController.register)
router.post('/login', loginValidation, authController.login)
router.post('/logout', authenticate, authController.logout)
router.get('/profile', authenticate, authController.getProfile)
router.put('/profile', authenticate, authController.updateProfile)

export default router
