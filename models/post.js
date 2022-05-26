import { ObjectId } from 'mongodb'
import { getDB } from '../config/db.js'

export const fetchAll = async () => {
  try {
    const Post = getDB().collection('posts')
    const cursor = await Post.aggregate([
      { $match: {} },
      { $limit: 20 }
    ])
    return await cursor.toArray()
  } catch (error) {
    throw error
  }
}

export const findById = async (id) => {
  try {
    const Post = getDB().collection('posts')
    return await Post.findOne({ _id: ObjectId(id) })
  } catch (error) {
    throw error
  }
}
