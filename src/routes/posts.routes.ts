
import express from 'express'
import { prisma } from '../util/db'

const router = express.Router()


// We prefix req here with an underscore to make typescript 
// stop complaining about it being an unused variable
router.get('/', async (_req, res) => {
  const posts = await prisma.post.findMany()
  res.json(posts)
})

router.get('/:id', async (req, res) => {
  const post = await prisma.post.findFirst({
    where: { id: req.params.id }
  })
  res.json(post)
})

router.post('/', async (req, res) => {
  const { title, body } = req.body 
  const post = await prisma.post.create({
    data: {
      title,
      body
    }
  })
  res.json(post)
})

export default router

