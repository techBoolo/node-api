import express from 'express'
import * as userController from '../controllers/user.js'

const router = express.Router()

router.get('/', userController.index)
router.get('/:id', userController.show)

export default router
