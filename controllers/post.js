import * as Post from '../models/post.js'
import ErrorResponse from '../utils/errorResponse.js'

export const index = async (req, res, next) => {
  try {
    const posts = await Post.fetchAll()
    res.status(200).json(posts)
  } catch (error) {
    next(error)
  }
}

export const show = async (req, res, next) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id) 
    if(post)
      return res.status(200).json(post)
    throw new ErrorResponse('Record not found', 404)
  } catch (error) {
    next(error)
  }
}
