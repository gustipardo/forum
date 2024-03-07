import express, { json } from 'express'
import { corsMiddleware } from './middleware/cors.js'
import { createForumRouter } from './routes/forum.js'

export const createApp = ({ forumModel }) => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/forum', createForumRouter({ forumModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server lisening on port http://localhost:${PORT}`)
  })
}
