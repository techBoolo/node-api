import { ObjectId } from 'mongodb'
import { getDB } from '../config/db.js'

export const fetchAll = async () => {
  try {
    const User = getDB().collection('users')
    const cursor = await User.aggregate([
      { $match: {} },
      { $addFields: { id: "$_id" }} 
    ])
    return await cursor.toArray()
  } catch (error) {
    throw error
  }
}

export const findById = async (id) => {
  try {
    const User = getDB().collection('users')
    return await User.findOne({ _id: ObjectId(id)})
  } catch (error) {
    throw error
  }
}
