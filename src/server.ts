
import 'dotenv/config'
import express from 'express'


import postRoutes from './routes/posts.routes'

const app = express()
app.use(express.json())
// add other middleware here


app.use('/posts', postRoutes)


export default app