import express from 'express'
import * as postController from '../controllers/post.js'

const router = express.Router()

router.get('/', postController.index)
router.get('/:id', postController.show)

export default router
