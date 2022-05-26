import * as User from '../models/user.js'
import ErrorResponse from '../utils/errorResponse.js'

export const index = async (req, res, next) => {
  try {
    const users = await User.fetchAll()
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

export const show = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if(user)
      return res.status(200).json(user)
    throw new ErrorResponse('Record not found', 404)
  } catch (error) {
    next(error)
  }
}
