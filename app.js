import express from 'express'
import logger from 'morgan'
import userRoute from './routes/user.js'
import postRoute from './routes/post.js'

const app = express()

app.use(logger('dev'))
app.use('/users', userRoute)
app.use('/posts', postRoute)

app.use((req, res, next) => {
  res.status(200).json({ message: 'it works, Route not found'})
})

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    error: {
      message: error.message
    }
  })
})

export default app
