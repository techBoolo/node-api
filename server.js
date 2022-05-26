import http from 'http'
import app from './app.js'
const PORT = process.env.PORT || 3001
import connectDB from './config/db.js'

const server = http.createServer(app)

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  })
  .catch(err => {
    console.log(err)
  })
