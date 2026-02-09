import { Router } from 'express'
import * as userController from '../controllers/user.controller.js'
import { authenticate } from '../middleware/auth.middleware.js'

const router = Router()

// All routes require authentication
router.use(authenticate)

router.get('/accounts', userController.getAccounts)
router.get('/accounts/:accountId', userController.getAccountDetails)
router.put('/accounts/:accountId', userController.updateAccount)

export default router
